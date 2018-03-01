import React from 'react';
import './VideoDetails.css';

const videoDetails = (props) => {
    let likes = props.details.likeCount;
    let dislikes = props.details.dislikeCount;
    
    if(likes > 999 && likes < 1000000){
       likes = Math.floor(likes/1000) + "K";
    }
    else if(likes > 999999){
       likes = Math.floor(likes/1000000) + "M";   
    }
    
    likes = likes + "";
    
    
    if(dislikes > 999 && dislikes < 1000000){
       dislikes = Math.floor(dislikes/1000) + "K";
    }
    else if(likes > 999999){
       dislikes = Math.floor(dislikes/1000000) + "M";   
    }
    
    dislikes = dislikes + "";

    return(
    <div className="video-details">
        <div style={{width: "100%", display:"inline-block", borderBottom: "1px solid #aaa"}}>
            <p style={{fontSize: "20px"}}>{props.details.title}</p>
            <div style={{float: "right", width: "250px", height: "40px"}}>
                <img width="30px" height="30px" src="../../icons8-thumbs_up.png" style={{marginLeft: "25px", display: "inline-block"}}/>
                <p style={{lineHeight: "30px", marginLeft: "10px",fontSize:"18px", fontWeight: "heavier", color:"grey", verticalAlign: "top", display: "inline-block", marginTop: "0px"}}>{likes}</p>
                <img width="30px" height="30px" src="../../icons8-thumbs_down.png" style={{marginLeft: "25px", display: "inline-block"}}/>
                <p style={{lineHeight: "30px", marginLeft: "10px",fontSize:"18px", fontWeight: "heavier",color:"grey", verticalAlign: "top", display: "inline-block", marginTop: "0px"}}>{dislikes}</p>
            </div>
        </div>
        <div style={{height:"150px", overflowY:"auto", borderBottom: "1px solid #aaa"}}>
            <p style={{ fontSize: "13px", wordBreak: "break-word", textOverflow: "ellipsis", overflow: "scroll"}}>{props.details.description}</p>    
        </div>
    </div>
    );
    
    
}



export default videoDetails;