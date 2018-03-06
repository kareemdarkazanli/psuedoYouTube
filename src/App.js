import React, { Component } from 'react';
import SuggestedVideos from './components/SuggestedVideos/SuggestedVideos';
import VideoDetails from './components/VideoDetails/VideoDetails';
import MainVideo from './components/MainVideo/MainVideo';
import NavBar from './components/NavBar/NavBar'
import CommentSection from './components/CommentSection/CommentSection'
import SearchYouTube from 'youtube-search-api-with-axios';
import WatchHistory from './components/WatchHistory/WatchHistory'
import Axios from 'axios';
import DynamoDB from 'dynamoose';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

class App extends Component {

    

  constructor(props){
        super(props);
        DynamoDB.AWS.config.update({
            accessKeyId: 'AKIAJZKTIFNGRZ6SWE6A',
            secretAccessKey: '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',
            region: 'us-west-2'
        });
        //Initialize
        //this.searchQuery = "hp";
        this.getSearchQuery();

      
        
  }
    
  state = {
        videos: [],
        topComments: [],
        videoDetails: {},
        videoId: "",
        watchHistory: []
  }
  

  /*searchChangedHandler = (event) => {
        this.searchQuery = event.target.value;
        
  }*/
  
  getSearchQuery = () => {
      console.log(this.props.searchQuery);
      SearchYouTube({key: "AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4", q: this.props.searchQuery, maxResults: 21}, (vids) => {
          console.log(vids);
          this.setState({
              videos: vids
          });
          
          //page is visited first time
          if(this.state.videoId == ""){
              this.videoSelected(vids[1]['id']['videoId'], vids[1]['snippet']['title'], vids[1]['snippet']['channelTitle'], vids[1]['snippet']["thumbnails"]["high"]["url"]);
          }
          
      });
      
      
  }
  
  videoSelected = (vidId, title, channelTitle, thumbnailURL) => {
      
      
      this.setState({
          videoId: vidId,
           
      });
      
      this.saveSelectedVideoToDatabase(vidId, title, channelTitle, thumbnailURL);
      this.retrieveTopComments(vidId);
      this.retrieveVideoDetails(vidId);
  }
  
  saveSelectedVideoToDatabase = (vidId, title, channelTitle, thumbnailURL) => {
      
      
      var History = DynamoDB.model('History', { videoId: String, title: String, channelTitle: String, thumbnailURL: String});

      new History({videoId: vidId, title: title, channelTitle: channelTitle, thumbnailURL: thumbnailURL}).save( () => {
         //this.props.retrieveWatchHistoryFromDatabase();
          this.retrieveWatchHistoryFromDatabase();
      });
      
  }
  
  retrieveWatchHistoryFromDatabase = () => {
    
      var History = DynamoDB.model('History', { videoId: String, title: String, channelTitle: String, thumbnailURL: String});

      History.scan().exec( (err, watchHistory) => {
          
          this.setState({
                watchHistory: watchHistory
          });
          
      });

  
  }
  
  
  
  retrieveTopComments = (vidId) => {
      
      
        Axios.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4&part=snippet,replies&videoId=' + vidId).then( response => {
            
            var Comment = function() {
                this.authorDisplayName =  "";
                this.authorProfileImageUrl = "";
                this.textDisplay = "";
            }
            
            var comments = [];
            for(let item of response["data"]["items"]){
                var c = new Comment();
                c.authorDisplayName = item["snippet"]["topLevelComment"]["snippet"]["authorDisplayName"];
                c.authorProfileImageUrl = item["snippet"]["topLevelComment"]["snippet"]["authorProfileImageUrl"];
                c.textDisplay = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"];
                comments.push(c);
            }
            
            this.setState({
                topComments: comments
            });
            
        }).catch(function (error) {
          
        });
      
  }
  
  retrieveVideoDetails = (vidId) => {
      Axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4&part=snippet,contentDetails,statistics&id='+vidId).then( response => {
                      
          var Details = function() {
                this.channelTitle =  "";
                this.description = "";
                this.title = "";
                this.dislikeCount="";
                this.likeCount="";
                this.viewCount="";
            }
          
          var d = new Details();
          d.channelTitle = response["data"]["items"][0]["snippet"]["channelTitle"];
          d.description = response["data"]["items"][0]["snippet"]["description"];
          d.title = response["data"]["items"][0]["snippet"]["title"];
          d.dislikeCount = response["data"]["items"][0]["statistics"]["dislikeCount"];
          d.likeCount = response["data"]["items"][0]["statistics"]["likeCount"];
          d.viewCount = response["data"]["items"][0]["statistics"]["viewCount"];

          this.setState({
                videoDetails: d
          });
          

        }).catch(function (error) {
          console.log(error);
        });
      
  }
  
    
  render() {
    
      
    return (
      <div>
        <NavBar click={this.getSearchQuery} changed={this.props.searchChangedHandler}/>
        <div className="row">
        {
            this.state && this.state.videos && <SuggestedVideos click={this.videoSelected} currentVideoId={this.state.videoId} suggestedVideos={this.state.videos}/>
        }
        {
        
        this.state.videoId.length > 0 && <MainVideo video={this.state.videoId}/>
        }
        {
        this.state.videoId.length > 0 && <VideoDetails details={this.state.videoDetails}/> 
        }
        {
        this.state.videoId.length > 0 && <CommentSection comments={this.state.topComments}/>
        }
        {
        this.state.watchHistory.length > 0 &&  <WatchHistory history={this.state.watchHistory} click={this.videoSelected} />
        }
        </div>
        <style jsx>{`
            .row {
                max-width: 1140px;
                margin: 0 auto;
            }
        `}
        </style>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        searchQuery: state.searchQuery
    };
}

const mapDispatchToProps = dispatch => {
    return {
        searchChangedHandler: (event) => dispatch({type: "SEARCH_CHANGED", event: event})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
