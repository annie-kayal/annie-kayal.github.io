import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './css/Cursor.scss'
import './css/react-tabs.scss'
import './css/main.scss'

import Home from './components/Home'


const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
}

const WIP = () => {

  return <div className="modal">
    <div className="modal-background"></div>
    <div className="modal-content">
    </div>
    <button className="modal-close is-large" aria-label="close"></button>
  </div>
}

export default WIP

ReactDOM.render(
  <App />,
  document.getElementById('root')
)