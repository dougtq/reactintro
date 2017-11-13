import React, { Component } from 'react'
import Comentario from '../Comentario/Comentario'
import Moment from 'moment'
import './Post.css'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: [
        {
          text: '',
          time: ''
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
        { text: this.state.newComment, time: this.state.newTime }
      ]
    })

    this.setState({ newComment: '' })
    e.preventDefault()
  }

  getCommentTime () {
    let now = Moment().format()
    now = now.split('T')
    now = now[1].split('-')
    return now[0]
  }

  handleNewComment (e) {
    this.setState({ newComment: e.target.value, newTime: this.getCommentTime() })
  }

  render () {
    return (
      <div className='post'>
        <span class='post-title'>{this.props.title}</span>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newComment}
            onChange={this.handleNewComment}
          />
          <button className='btn btn-success' type='submit'> Comentar </button>
        </form>
        {this.state.comments.map((data, index) => (
          <Comentario key={index} text={data.text} time={data.time} />
        ))}
      </div>
    )
  }
}

export default Post
