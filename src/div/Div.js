import React, { Component } from 'react'
import './Div.css'
import App from '../app/App'
import Lista from '../lista/Lista'

class Div extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      title: 'React Intro'
    }
  }

  render () {
    return (
      <div align='center'>
        <App />
        <h1 className='Div-test'>
          {this.state.title}
        </h1>
        <div>
          <Lista />
        </div>
      </div>
    )
  }
}

export default Div
