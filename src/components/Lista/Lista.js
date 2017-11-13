import React, { Component } from 'react'
import Post from '../Post/Post'

class Lista extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      newPost: ''
    }

    // setTimeout(() => {
    //   this.setState({
    //     posts: [
    //       ...this.state.posts,
    //       {
    //         id: 3,
    //         title: 'Medium é 10/10'
    //       }
    //     ]
    //   })
    // }, 3000)

    this.render = this.render.bind(this)
    this.handleNewPost = this.handleNewPost.bind(this)
    this.createPost = this.createPost.bind(this)
  }

  createPost (e) {
    let arr = this.state.posts
    let cont = arr.length + 1

    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: cont,
          title: this.state.newPost
        }
      ]
    })
    this.setState({ newPost: '' })
    e.preventDefault()
  }

  handleNewPost (e) {
    this.setState({ newPost: e.target.value })
  }

  render () {
    return (
      <div className='list'>
        {this.state.posts.map(post =>
          <Post key={post.id} title={post.title} />
        )}
        <input value={this.state.newPost} onChange={this.handleNewPost} />
        <button className='btn btn-success' type='submit' onClick={this.createPost}> Criar um novo post</button>
      </div>
    )
  }
}

export default Lista
