import React from 'react'

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
    const renderData = todos.map((task) => {
        return (
            <li key={task.id}>
                <span>{task.title}</span>
            </li>
        )
    })

    return (
        <div>
            <ol>{renderData}</ol>
        </div>
    )
}

export default Read