import React from 'react';
import './CommentSection.css';
import Comment from './Comment/Comment';

const commentSection = (props) => (
    <div className="comment-section">
        {
          props.comments.map(function(comment, index){
                    return <Comment key={index} comment={comment}></Comment>
          })
               
        }
    </div>
);

export default commentSection;