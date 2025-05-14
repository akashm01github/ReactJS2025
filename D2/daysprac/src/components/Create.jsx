import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';


const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
    const [title, settitle] = useState("");
    const submitHandeler = (e) => {
    e.preventDefault();
    console.log(title);

    const newTodo = {
      id: nanoid(),
      title
    }
    console.log(newTodo)
    const copyTodo = [...todos];
    copyTodo.push(newTodo);
    settodos(copyTodo);

    settitle("");
  }

  return (
    <div>
        <h1>Users Details</h1>
      <form action="" onSubmit={submitHandeler}>
        <input onChange={(e) => settitle(e.target.value)} value={title} type="text" placeholder='Task' /><br />
        <br />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default Create