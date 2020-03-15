import React, { Component } from 'react';
import './Post.css';

import PostComment from '../PostComment'

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <div>
            <img src={post.author.avatar} alt="" />
            <div>
              <strong href="">{post.author.name}</strong>
              <span>{post.date}</span>
            </div>
          </div>
          <i className="material-icons">clear</i>
        </div>
        <div className="post-body">{post.content}</div>
        <div className="post-line"></div>
        <div className="post-footer">
          <div>
            <i className="material-icons-outlined">thumb_up_alt</i>
            <span>Gostei</span>
          </div>
          <div>
            <i className="material-icons-outlined">chat_bubble_outline</i>
            <span>Comentar</span>
          </div>
        </div>
        <div className="post-line post-margin"></div>
        <div className="post-comments">
          {post.comments.map(comment => (<PostComment key={comment.id} comment={comment}/>))}
          <div className="comment">
            <img src="https://avatars3.githubusercontent.com/u/5060732"></img>
            <input type="text" placeholder="Escreva seu comentário" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;