import React, { useState, useEffect } from 'react';

export default function MessageForm() {

    const [ content, setContent ] = useState("");
    const [ linename, setLinename ] = useState("")
    const [ userID, setUserID ] = useState("");
    const [ allMessages, setAllMessages ] = useState([])

    const fetchMessages = async function () {
        try {
            const response = await fetch("http://localhost:3000", {
                method: "GET",
                cors: 'no-cors'
            }).then(data => data.json())
                .then(data => setAllMessages(data))
        } catch (err) {
            console.log(err)
        }
    }

    useState(() => {
        fetchMessages()
    })



    const handleSubmit = async function (e) {
        e.preventDefault()
        const newMsg = { content, linename, userID }
        console.log("MESSAGE: ", content)
        try {
            const response = await fetch('/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMsg)
            }).then(data => data.json())
                .then(data => setAllMessages(data))




        } catch (error) {
            console.log(error)
        }
    }
    console.log(allMessages)
    const mapped = [];
    for (let msg of allMessages) {
        mapped.push(
            <li>
                <p>Content: {msg.content}</p>
                <p>Author: {msg.train_user_id}</p>
                <p>Date: {msg.created_at}</p>
                <p>Train: {msg.linename}</p>
            </li>
        )
    }

    return (
        <div>
            <h1>Add a message: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Message</label>
                <input onChange={(e) => { setContent(e.target.value) }} type="text" />

                <label htmlFor="">LINENAME: </label>
                <input onChange={(e) => { setLinename(e.target.value) }} type="text" />

                <label htmlFor="">User ID: </label>
                <input onChange={(e) => { setUserID(e.target.value) }} type="text" />
                <button>Click me xD</button>
            </form>
            {mapped}
        </div>
    )
}
