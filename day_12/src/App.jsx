import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8800/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err.message))
  }, [])
  console.log(users);
  
  const getData = () => {

  }
  return (
    <div>
      <h2>Users Data</h2>
      <button >show Data</button>
    </div>
  )
}

export default App