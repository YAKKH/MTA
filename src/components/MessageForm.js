import React, { useState, useEffect } from 'react';

export default function MessageForm() {

    const [ content, setContent ] = useState("");
    const [ linename, setLinename ] = useState("m")
    const [ userID, setUserID ] = useState("");
    const [ allMessages, setAllMessages ] = useState([])

    const fetchMessages = async function () {
        try {
            const response = await fetch("/", {
                method: "GET",
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
        if (linename === msg.linename) {
            mapped.push(
                <li>
                    <p>Content: {msg.content}</p>
                    <p>Author: {msg.train_user_id}</p>
                    <p>Date: {msg.created_at}</p>
                    <p>Train: {msg.linename}</p>
                </li>
            )
        }
    }

    return (
        <div>
            <h1>F Train Updates: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Message:</label>
                <input onChange={(e) => { setContent(e.target.value) }} type="text" />


                <select onChange={(e) => { setLinename(e.target.value) }} name="" id="">
                    <option value="A">A</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="B">B</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="J">J</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="Q">Q</option>
                    <option value="R">R</option>
                    <option value="W">W</option>
                    <option value="Z">Z</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>

                </select>

                <label htmlFor="">User Name: </label>
                <input onChange={(e) => { setUserID(e.target.value) }} type="text" />
                <button className={'submit-btn'}>Add Update</button>
            </form>
            {mapped}
        </div>
    )
}
