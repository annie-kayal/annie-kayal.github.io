import React from 'react'
import ReactDOM from 'react-dom'
import Rebuild from './components/Rebuild'

import 'bulma'
import './css/react-tabs.scss'
import './css/Cursor.scss'
import './css/main.scss'




const App = () => {
  
  return <Rebuild />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)