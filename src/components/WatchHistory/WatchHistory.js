import React from 'react';
import Thumbnail from '../SuggestedVideos/Thumbnail/Thumbnail';

const watchHistory = (props) => {
    
    return(
        <div style={{display: "block", float: "right", width: "100%"}}>
            <h1>Watch History</h1>
            <div>
            {
                props.history.map(function(video, index){
                    return <div style={{margin:"10px", display: "inline-block"}}><Thumbnail key={index} videoId={video["videoId"]} title={video["title"]} channelTitle={video["channelTitle"]} thumbnailURL={video["thumbnailURL"]} click={props.click}></Thumbnail></div>
                })
               
            }
            </div>
        </div>
    );
}

export default watchHistory;