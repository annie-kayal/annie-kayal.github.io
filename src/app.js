import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './css/react-tabs.scss'
import './css/Cursor.scss'
import './css/main.scss'

import Home from './components/Home'
import Contact from './components/Contact'


const App = () => {
  
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/#contact' component={Contact} />
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)