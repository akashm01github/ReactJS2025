import React, { useState } from 'react';

import Create from './components/Create';
import Read from './components/Read';

const App = () => {

  const [todos, settodos] = useState([
    { id: 1, title: "Task-1" }
  ])

  return (
    <div>
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos}  />
    </div>
  )
}

export default App