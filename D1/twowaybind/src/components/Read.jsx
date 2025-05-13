import React from 'react'

const Read = (props) => {
    let usersName = props.usersName;
    let setusersName = props.setusersName;
    let renderData = usersName.map((usersname, index) => {
        return (
            <li key={index}>
                <span>{usersname.userName}</span> =
                <span>{usersname.age}</span>
            </li>
        )
    })

    return (
        <div>
            <h1>User Read Data</h1>
            <ol>
                {renderData}
            </ol>
        </div>
    )
}

export default Read