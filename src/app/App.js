import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Div from '../div/Div'
import logo from '../assets/logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Bem Vindo to ReactIntro</h1>
        </header>
      </div>
    )
  }

  renderDiv () {
    ReactDOM.render(<Div />, document.getElementById('root'))
  }
}

export default App
