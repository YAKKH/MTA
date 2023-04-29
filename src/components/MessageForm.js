import React, { useState } from 'react';

export default function MessageForm() {

    const [ message, setMessage ] = useState("");
    const [ trainID, setTrainID ] = useState(1)
    const [ userID, setUserID ] = useState("johnny")



    const handleSubmit = async function (e) {
        e.preventDefault()
        const newMsg = { message, trainID, userID }
        console.log("MESSAGE: ", message)
        try {
            const request = await fetch('/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMsg)
            })
            console.log("REQUEST: ", response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Add a message: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Message</label>
                <input onChange={(e) => { setMessage(e.target.value) }} type="text" />



                <button>Click me xD</button>
            </form>
        </div>
    )
}
