import React from 'react'
import Home from './Home'
import Login from './Login'
import User2 from './User2'
import Chatroom from './Chatroom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/User2" component={User2} />
      <Route exact path="/Chatroom" component={Chatroom} />
    </div>
  )
}

export default App
