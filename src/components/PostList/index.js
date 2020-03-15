import React, { Component } from 'react'

import './PostList.css';
import Post from '../Post'
import PostCreate from '../PostCreate'

class PostList extends Component {
  state = {
    newPost: '',
    posts: [],
    postsBackup: [
      {
        id: 1,
        author: {
          name: "Victor Eyer",
          avatar: "https://avatars3.githubusercontent.com/u/5060732"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        likes: [
          {
            id: 1,
            author: {
              name: "Victor Eyer",
              avatar: "https://avatars3.githubusercontent.com/u/5060732"
            },
            type: "like"
          }
        ],
        comments: [
          {
            id: 1,
            author: {
              name: "Victor Eyer",
              avatar: "https://avatars3.githubusercontent.com/u/5060732"
            },
            content: "UP"
          },
          {
            id: 2,
            author: {
              name: "Victor Eyer",
              avatar: "https://avatars3.githubusercontent.com/u/5060732"
            },
            content: "Eu amo batata frita, é super incrivel porque é batata e é frita!"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Victor Eyer",
          avatar: "https://avatars3.githubusercontent.com/u/5060732"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 3,
            author: {
              name: "Victor Eyer",
              avatar: "https://avatars3.githubusercontent.com/u/5060732"
            },
            content: "UP"
          },
          {
            id: 4,
            author: {
              name: "Victor Eyer",
              avatar: "https://avatars3.githubusercontent.com/u/5060732"
            },
            content: "Eu amo batata frita, é super incrivel porque é batata e é frita!"
          },
        ]
      },
    ]
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
        date: "10 Mar 2020",
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
          defaultValue ={this.state.newPost.content}/>
        { this.state.posts.map(post => (<Post key={post.id} post={post}/>))}
      </section>
    );
  }
}

export default PostList;