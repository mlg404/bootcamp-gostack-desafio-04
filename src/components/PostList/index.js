import React, { Component } from 'react'

import './PostList.css';
import Post from '../Post'
import PostCreate from '../PostCreate'

class PostList extends Component {
  state = {
    newComment: '',
    newPost: '',
    posts: [],
  };

  componentDidMount() {
    const posts = localStorage.getItem('posts');

    if (posts){
      this.setState({ posts: JSON.parse(posts)})

    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem('posts', JSON.stringify(this.state.posts))
    }
  }

  handlePostWrite = e => {
    this.setState({
      newPost: {
        id: this.state.posts.length + 1,
        author: {
          name: "Victor Eyer",
          avatar: "https://avatars3.githubusercontent.com/u/5060732"
        },
        date: "15 Mar 2020",
        content: e.target.value,
        comments: []
      },
    });
  }

  handlePost = e => {
    if (!this.state.newPost.content){
      console.log("Post can't be empty.")
      return;
    }
    this.setState(
      {
        posts: [
          ...this.state.posts,
          this.state.newPost
        ],
        newPost: { content: "" },
      }
    )
  }

  render() {
    return (
      <section>
        <PostCreate  
          handleChange={(e) => this.handlePostWrite(e)} 
          handlePost={(e) => this.handlePost(e)}
          defaultValue={this.state.newPost.content}
        />
        { this.state.posts.reverse().map(post => (
          <Post 
            key={post.id} 
            post={post}
          />))}
      </section>
    );
  }
}

export default PostList;