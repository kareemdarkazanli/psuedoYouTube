import React from 'react';
import './SuggestedVideos.css';
import Thumbnail from './Thumbnail/Thumbnail';

const suggestedVideos= (props) => {
    
    return (
        <div className="side-panel">
            {
                
                props.suggestedVideos.map(function(suggestedVideo, index){
                    if(props.currentVideoId != suggestedVideo["id"]["videoId"]){
                        return <Thumbnail key={index} videoId={suggestedVideo["id"]["videoId"]} title={suggestedVideo["snippet"]["title"]} channelTitle={suggestedVideo["snippet"]["channelTitle"]} thumbnailURL={suggestedVideo["snippet"]["thumbnails"]["high"]["url"]} click={props.click}></Thumbnail>
                    }
                })
               
            }
            
        </div>
    );
} 

export default suggestedVideos;