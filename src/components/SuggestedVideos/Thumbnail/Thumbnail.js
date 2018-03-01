import React from 'react';
import './Thumbnail.css';

const thumbnail = (props) => {
    
    
    return (
        <div style={{backgroundColor: "white", height: "115px", width:"100%"}} onClick={props.click.bind(this, props.videoId, props.title, props.channelTitle, props.thumbnailURL)}>
           <img className="thumbnail" src={props.thumbnailURL} alt="thumbnail" height="100px" width="160px"/>
            <div style={{display: "inline-block", width: "225px", height: "100%", marginLeft:"5px", verticalAlign:"top"}}>
                <p className="video-title">{props.title}</p>
                <p className="channel-title">{props.channelTitle}</p>
            </div>
        </div>
    );
    
}

export default thumbnail;