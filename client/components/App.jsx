import React from 'react'
import Home from './Home'
import Login from './Login'
import User2 from './User2'
import Chatroom from './Chatroom'
import { Route } from 'react-router-dom'

function App () {
  return (
    <>
      <div className='app'></div>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/User2' component={User2} />
      <Route path='/Chatroom' component={Chatroom} />
    </>
  )
}

export default App
