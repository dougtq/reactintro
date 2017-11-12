import React, { Component } from 'react'
import './Comentario.css'

class Comentario extends Component {
  render () {
    return (
      <div>
        <p>{ this.props.text } { (this.props.time) ? 'às' : '' } { this.props.time } </p>
      </div>
    )
  }
}

export default Comentario
