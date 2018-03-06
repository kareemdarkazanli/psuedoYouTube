import React from 'react';
import YoutubePlayer from 'react-youtube-player';

const mainVideo = (props) => {
    
    return(
        <div className="main-video">
            <YoutubePlayer videoId={props.video} playbackState='unstarted' configuration={{showinfo: 1, controls: 3}} />
            <style jsx>{`
            .main-video {
                width: 640px;
                height: 360px;
                display: inline-block;
            }
        `}
        </style>
        </div>
    );
   
}

export default mainVideo;
