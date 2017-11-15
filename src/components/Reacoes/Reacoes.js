import React, { Component } from 'react'

class Reactions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      like_count: 0
    }
    this.liker = this.liker.bind(this)
  }

  liker (e) {
    this.setState({
      like_count: this.state.like_count + 1
    })
  }

  render () {
    return (
      <div className='reaction'>
        { this.state.like_count } <button className='btn btn-primary' onClick={this.liker}>Likar</button>
      </div>
    )
  }
}

export default Reactions
