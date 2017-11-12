import React, { Component } from 'react'
import Post from '../Post/Post'

class Lista extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Aprendendo React',
          disabled: true
        },
        {
          id: 2,
          title: 'A RocketSeat é massa!',
          disabled: false
        },
        {
          id: 3,
          title: 'ReactIntro is Awesome!',
          disabled: false
        },
        {
          id: 4,
          title: 'Medium é massa!',
          disabled: false
        },
        {
          id: 5,
          title: 'Acabou minha criatividade!',
          disabled: false
        }
      ]
    }

    setTimeout(() => {
      this.setState({
        posts: [
          ...this.state.posts,
          { id: 6, title: 'Novo post no fim da lista', disabled: false },
          { id: 7, title: 'Novo post no fim da lista', disabled: false },
          { id: 8, title: 'Novo post no fim da lista', disabled: false }
        ]
      })
    }, 3000)

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
