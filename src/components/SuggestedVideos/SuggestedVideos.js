import React from 'react';
import './SuggestedVideos.css';
import Thumbnail from './Thumbnail/Thumbnail';

const suggestedVideos= (props) => {
    
    return (
        <div className="side-panel">
            {
                
                props.suggestedVideos.map(function(suggestedVideo, index){
                    return <Thumbnail key={index} video={suggestedVideo} click={props.click}></Thumbnail>
                })
               
            }
            
        </div>
    );
} 

export default suggestedVideos;