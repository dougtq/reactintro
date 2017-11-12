import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Div from './div/Div'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Div />, document.getElementById('root'))
registerServiceWorker()
