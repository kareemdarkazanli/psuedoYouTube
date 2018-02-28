import React, { Component } from 'react';
import SuggestedVideos from './components/SuggestedVideos/SuggestedVideos';
import VideoDetails from './components/VideoDetails/VideoDetails';
import MainVideo from './components/MainVideo/MainVideo';
import NavBar from './components/NavBar/NavBar'
import CommentSection from './components/CommentSection/CommentSection'
import SearchYouTube from 'youtube-search-api-with-axios';
import Axios from 'axios';
import './App.css';

class App extends Component {
    

  constructor(props){
        super(props);
      
        //Initialize
        this.searchQuery = "hp";
        this.videoSelected("_DJ4Xv8W1D0");
        this.getSearchQuery();
        
  }
    
  state = {
        videos: [],
        topComments: [],
        videoId: "_DJ4Xv8W1D0"
  }


  searchChangedHandler = (event) => {
        this.searchQuery = event.target.value;
        
  }
  
  getSearchQuery = () => {
      console.log(this.state.query);
      SearchYouTube({key: "AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4", q: this.searchQuery, maxResults: 21}, (vids) => {
          this.setState({
              videos: vids
          });
          
      });
  }
  
  videoSelected = (vidId) => {
      
      
      this.setState({
          videoId: vidId,
           
      });
      
      this.retrieveTopComments(vidId);
      
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
            console.log(this.state.topComments);
        }).catch(function (error) {
          
        });
      
  }
  
    
  render() {
    
      
    return (
      <div>
        <NavBar click={this.getSearchQuery} changed={this.searchChangedHandler}/>
        <div className="row">
        {
            this.state && this.state.videos && <SuggestedVideos click={this.videoSelected} suggestedVideos={this.state.videos}/>
        }
        {
        
        this.state.videoId.length > 0 && <MainVideo video={this.state.videoId}/>
        }
        <VideoDetails/>
        <CommentSection comments={this.state.topComments}/>
        </div>
      </div>
    );
  }
}

export default App;
