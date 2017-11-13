import React, { Component } from 'react'
import './Comentario.css'

class Comentario extends Component {
  render () {
    return (
      <div className='comment' align='center'>
        <p> <strong>{ this.props.text } { (this.props.time) ? ' às' : '' } { this.props.time } </strong> </p>
        <p className='time' />
      </div>
    )
  }
}

export default Comentario
