import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoadPost extends Component {

  handleSave(e) {
    const text = e.target.value;
    this.props.addPost(text)
  }

  fetchTweets() {
    this.props.fetchTweets()
  }

  render() {

    const { user } = this.props.user;
    const { posts } = this.props.posts;

    if (!posts.length) {
        return (<div>
            <button onClick={this.fetchTweets.bind(this)}>load posts</button> 
            </div>
        );
    }

    const mappedPosts = posts.map(post => <li key={post.id}>{post.id} - {post.text}</li>)

    return (<div>
      <h1>{user.email}</h1>
      <h4>Search Posts</h4>
      <ul>{mappedPosts}</ul>
    </div>
    );
  }
}


LoadPost.propTypes = {
    addPost: PropTypes.func.isRequired,
    fetchTweets: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    user:  PropTypes.object.isRequired
}