import React from 'react';

const comment = (props) => {
    
    return(
    <div style={{width: "100%", display: "inline-block"}}>
        <img src={props.comment["authorProfileImageUrl"]} alt="profilepic" width="45px" height="45px" className="profile-pic"/>
        <div style={{marginLeft:"5px", width:"400px", verticalAlign:"top", display: "inline-block"}}>
            <p className="author-name">{props.comment["authorDisplayName"]}</p>
            <p className="comment">{props.comment["textDisplay"]}</p>
        </div>
        
        <style jsx>{`
            .profile-pic {
                margin-top: 5px;
                border-radius: 50%;
                display: inline-block;
            }

            .author-name {
            overflow-wrap: normal;
            overflow: hidden;
            width: 100%;
            height: 38px;
            vertical-align: top;
            margin-top: 5px;
        }

        .comment {
            overflow-wrap: normal;
            overflow: hidden;
            font-weight: lighter;
            font-size: 14px;
            vertical-align: top;
            margin-top: -30px;
        }
        `}
        </style>
        
    </div>
    
    );
}

export default comment;