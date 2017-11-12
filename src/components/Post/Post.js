import React, { Component } from 'react'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <h3>{this.props.title}</h3>
  }
}

export default Post
