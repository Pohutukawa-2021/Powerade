import React from 'react'

const usernames = ['Alan', 'Ali', 'Austin', 'James', 'Siyang']

function User2 () {
  function handleClick (username) {
    console.log(username)
  }

  return (
    <ul>
      {usernames.map((element) => <li key={element} onClick={() => handleClick(element)}>{element}</li>)}
    </ul>
  )
}
export default User2
