import React, { Component } from 'react';

import './PostComment.css';

class PostComment extends Component {
  render(){
    const comment = this.props.comment;
    return (
      <div className="comment">
        <img src={comment.author.avatar}></img>
        <div>
          <span>{comment.author.name} </span>
          {comment.content}
        </div>
      </div>
    );
  }
}

export default PostComment;