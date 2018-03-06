import React from 'react';

const thumbnail = (props) => {
    
    
    return (
        <div style={{backgroundColor: "white", height: "115px", width:"100%"}} onClick={props.click.bind(this, props.videoId, props.title, props.channelTitle, props.thumbnailURL)}>
           <img className="thumbnail" src={props.thumbnailURL} alt="thumbnail" height="100px" width="160px"/>
            <div style={{display: "inline-block", width: "225px", height: "100%", marginLeft:"5px", verticalAlign:"top"}}>
                <p className="video-title">{props.title}</p>
                <p className="channel-title">{props.channelTitle}</p>
            </div>
            <style jsx>{`
                .thumbnail {
                    margin-left: 5px;
                    object-fit: cover;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    display: inline-block;
                }

                .video-title {
                    font-size: 15px;
                    font-weight: bolder;
                    overflow-wrap: normal;
                    overflow: hidden;
                    width: 225px;
                    vertical-align: top;
                    margin-top: 10px;
                }

                .channel-title {
                    font-size: 12px;
                    color: grey;
                    font-weight: lighter;
                    vertical-align: top;
                    margin-top: -10px;
                }
        `}
        </style>
        </div>
    );
    
}

export default thumbnail;