import React from 'react';
import './Comment.css';

const Comment = ({comment}) => {
    console.log(comment)
    return (
        <div>
            <div className="comment d-flex justify-content-evenly align-items-center">
                <img src={comment.img ? comment.img : "https://i.dlpng.com/static/png/7105396_preview.png"} alt="" />
    
                <div>
                    <p>{comment.name}</p>
                    <p>{comment.comment ? comment.comment : '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'}</p>
                    
                </div>
                
            </div>
            <br /> <br />
        </div>
    );
};

export default Comment;