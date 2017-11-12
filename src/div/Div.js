import React, { Component } from 'react'
import './Div.css'
import App from '../app/App'

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
      <div >
        <App />
        <h1 align="center" className="Div-test"> { this.state.title } </h1>
      </div>
    )
  }
}

export default Div
