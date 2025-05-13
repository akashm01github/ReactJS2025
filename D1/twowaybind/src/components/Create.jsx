import React, { useState } from 'react'

const Create = () => {
    // !CREATE DATA
    const [userFullName, setuserFullName] = useState("");
    const [age, setAge] = useState(0);

    const submitHabdeler = (e) => {
        e.preventDefault();
        const newUsers = { userFullName, age }
        console.log(newUsers)
    }
    return (
        <div>
            <h1>USERS CREATED DATA</h1>
            <form action="" onSubmit={submitHabdeler}>
                <input onChange={(e) => { setuserFullName(e.target.value) }} value={userFullName} type="text" placeholder='Name' />
                <input onChange={(e) => { setAge(e.target.value) }} value={age} type="number" placeholder='Age' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create