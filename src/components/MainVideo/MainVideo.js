import React from 'react';
import './MainVideo.css'
import YoutubePlayer from 'react-youtube-player';

const mainVideo = (props) => {
    
    return(
        <div className="main-video">
            <YoutubePlayer videoId={props.video} playbackState='unstarted' configuration={{showinfo: 1, controls: 3}} />
        </div>
    );
   
}

export default mainVideo;
