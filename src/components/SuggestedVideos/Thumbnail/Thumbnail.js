import React from 'react';
import './Thumbnail.css';

const thumbnail = (props) => {
    
    
    return (
        <div style={{backgroundColor: "white", height: "115px", width:"100%"}} onClick={props.click.bind(this, props.video["id"]["videoId"])}>
           <img className="thumbnail" src={props.video["snippet"]["thumbnails"]["high"]["url"]} alt="thumbnail" height="100px" width="160px"/>
            <div style={{display: "inline-block", width: "225px", height: "100%", marginLeft:"5px", verticalAlign:"top"}}>
                <p className="video-title">{props.video["snippet"]["title"]}</p>
                <p className="channel-title">{props.video["snippet"]["channelTitle"]}</p>
            </div>
        </div>
    );
    
}

export default thumbnail;