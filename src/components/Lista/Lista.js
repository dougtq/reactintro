import React, { Component } from 'react'
import Post from '../Post/Post'

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
          title: 'ReactIntro is Awesome!'
        },
        {
          id: 4,
          title: 'Medium é massa!'
        },
        {
          id: 5,
          title: 'Acabou minha criatividade!'
        }
      ]
    }

    setTimeout(() => {
      this.setState({
        posts: [
          ...this.state.posts,
          {
            id: 6,
            title: 'Novo post no fim da lista'
          }
        ]
      })
    }, 3000)

    this.render.bind(this)
  }
  render () {
    return (
      <div>
        {this.state.posts.map(post =>
          <Post key={post.id} title={post.title} />
        )}
      </div>
    )
  }
}

export default Lista
