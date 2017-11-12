import React, { Component } from 'react'
import Lista from './Lista/Lista'
import logo from '../assets/logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>React Intro</h1>
        </header>
        <Lista />
      </div>
    )
  }
}

export default App
