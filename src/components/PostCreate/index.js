import React, { Component } from 'react';
import './PostCreate.css';

class PostCreate extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header post-create-header">
          <strong href="">Nova publicação</strong>
        </div>
        <div className="post-body post-create-body">
          <img src="https://avatars3.githubusercontent.com/u/5060732" alt="" />
          <textarea onChange={this.props.handleChange} value={this.props.defaultValue} placeholder="Compartilhe algo com seus amigos!"></textarea>
        </div>
        <div className="post-create-footer">
          <button onClick={this.props.handlePost}>Post</button>
        </div>
      </div>
    )
  }
}

export default PostCreate;
