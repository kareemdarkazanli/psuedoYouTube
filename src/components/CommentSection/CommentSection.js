import React from 'react';
import Comment from './Comment/Comment';

const commentSection = (props) => (
    <div className="comment-section">
        {
          props.comments.map(function(comment, index){
                    return <Comment key={index} comment={comment}></Comment>
          })
               
        }
        <style jsx>{`
            .comment-section {
                width: 640px;
                margin-top: 20px;
            }
        `}
        </style>
    </div>
);

export default commentSection;