import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name : "shin chocho",
        comment : "멍멍 #$#$#$#$."
    },
    {
        name : "you똥",
        comment : "쵸쵸야 안뇽.."
    },
    {
        name : "shin똥",
        comment : "쵸쵸야 먹기다려."
    },
    {
        name : "you똥",
        comment : "그만해~"
    },
    {
        name : "shin chocho",
        comment : "으르릉 컹컹."
    },
];

function CommentList(props){
    return (
        <div>
           {comments.map((comment) => {
            return(
                <Comment name={comment.name} comment={comment.comment} />
            );
           })}
        </div>
    );
}

export default CommentList;