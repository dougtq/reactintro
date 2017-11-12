import React, { Component } from 'react'
import Comentario from '../Comentario/Comentario'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: [
        {
          text: ''
        }
      ],
      newComment: ''
    }
    this.render = this.render.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewComment = this.handleNewComment.bind(this)
  }

  handleSubmit (e) {
    this.setState({
      comments: [
        ...this.state.comments,
        { text: this.state.newComment }
      ]
    })

    this.setState({ newComment: '' })
    e.preventDefault()
  }

  handleNewComment (e) {
    this.setState({ newComment: e.target.value })
  }

  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newComment}
            onChange={this.handleNewComment}
          />
          <button type="submit"> Enviar </button>
        </form>
        {this.state.comments.map((data, index) => (
          <Comentario key={index} text={data.text} />
        ))}
      </div>
    )
  }
}

export default Post
