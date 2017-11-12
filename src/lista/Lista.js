import React, { Component } from 'react'
import Post from '../post/Post'

class Lista extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Aprendendo React'
        },
        {
          id: 2,
          title: 'A RocketSeat é massa!'
        },
        {
          id: 3,
          title: 'ReactIntro is Awesome'
        }
      ]
    }
    this.render.bind(this)
  }
  render () {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} />
        ))}
      </div>
    )
  }
}

export default Lista
