import React, { useState } from 'react'
import Read from './components/Read'

import Create from './components/Create';
const App = () => {

  //Data
  const [usersName, setusersName] = useState([
    { userName: "Akash", age: 24 },
    { userName: "Aparna", age: 40 },
    { userName: "Raju", age: 50 },
  ])

  return (
    <div>
      <Create/>
      <hr />
      <Read usersName={usersName} setusersName={setusersName}  />
    </div>
  )
}

export default App