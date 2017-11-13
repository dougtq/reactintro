import React, { Component } from 'react'
import Post from '../Post/Post'

class Lista extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {
          id: 1,
          title: 'RocketSeat é massa!'
        },
        {
          id: 2,
          title: 'ReactIntro tbm é massa!'
        }
      ]
    }

    setTimeout(() => {
      this.setState({
        posts: [
          ...this.state.posts,
          {
            id: 3,
            title: 'Medium é 10/10'
          }
        ]
      })
    }, 3000)

    this.render.bind(this)
  }
  render () {
    return (
      <div className='list'>
        {this.state.posts.map(post =>
          <Post key={post.id} title={post.title} />
        )}
      </div>
    )
  }
}

export default Lista
