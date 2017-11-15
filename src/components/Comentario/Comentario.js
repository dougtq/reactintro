import React, { Component } from 'react'
import './Comentario.css'
import Reacoes from '../Reacoes/Reacoes'

class Comentario extends Component {
  render () {
    return (
      <div className='comment' align='center'>
        <p> { (this.props.time) ? 'Comentário: ' : '' } <strong>{ this.props.text } </strong> { (this.props.time) ? ' às' : '' } { this.props.time } </p>
        <p className='time' />
        <Reacoes />
      </div>
    )
  }
}

export default Comentario
