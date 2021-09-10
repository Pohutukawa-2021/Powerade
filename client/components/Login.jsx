import React from 'react'

const usernames = ['Alan', 'Ali', 'Austin', 'James', 'Siyang']

function Login () {
  function handleClick (username) {
    console.log(username)
  }

  return (
    <ul>
      {usernames.map((element) => <li key={element} onClick={() => handleClick(element)}>{element}</li>)}
    </ul>
  )
}

export default Login
