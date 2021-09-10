import React from 'react'

const usernames = ['Alan', 'Ali', 'Austin', 'James', 'Siyang']

function Login() {
  function handleClick(username) {
    console.log(username)
  }

  return (
    <div className="username">
      <h1 className="username-title">Select Your Username</h1>
      <ul className="username-list">
        {usernames.map((element) => (
          <li
            className="list-item border border-1 rounded"
            key={element}
            onClick={() => handleClick(element)}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Login
