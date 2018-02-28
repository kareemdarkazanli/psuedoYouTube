import React from 'react';
import './Comment.css';


const comment = (props) => {
    
    return(
    <div style={{width: "100%", display: "inline-block"}}>
        <img src={props.comment["authorProfileImageUrl"]} alt="profilepic" width="45px" height="45px" className="profile-pic"/>
        <div style={{marginLeft:"5px", width:"400px", verticalAlign:"top", display: "inline-block"}}>
            <p className="author-name">{props.comment["authorDisplayName"]}</p>
            <p className="comment">{props.comment["textDisplay"]}</p>
        </div>
    </div>
    
    );
}

export default comment;