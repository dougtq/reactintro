import React, { Component } from 'react'
import './Comentario.css'

class Comentario extends Component {
  render () {
    return (
      <div className='comment' align='center'>
        <p> { (this.props.time) ? 'Comentário: ' : '' } <strong>{ this.props.text } </strong> { (this.props.time) ? ' às' : '' } { this.props.time } </p>
        <p className='time' />
      </div>
    )
  }
}

export default Comentario
