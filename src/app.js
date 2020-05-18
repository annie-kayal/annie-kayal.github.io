import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './css/Cursor.scss'
import './css/main.scss'

import Home from './components/Home'


const App = () => {
  return <BrowserRouter basename='/annie-kayal.github.io'>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)