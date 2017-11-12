import React, { Component } from 'react'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <h1>{this.props.title}</h1>
  }
}

export default Post
