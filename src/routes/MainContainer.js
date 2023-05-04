/* eslint-disable react/jsx-key */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MainContainer() {
    const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
    // const username = useSelector((state) => state.account.username);
    const _id = useSelector((state) => state.account._id);

    const [color, setColor] = useState('');
    const [lineName, setLineName] = useState('');
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);

    const updateColor = function () {
        let color = 'white';
        switch (lineName) {
            case 'A':
            case 'C':
            case 'E':
                color = ('blue');
                break;
            case 'B':
            case 'D':
            case 'F':
            case 'M':
                color = ('orange');
                break;
            case 'G':
                color = ('lime');
                break;
            case 'L':
                color = ('gray');
                break;
            case 'J':
            case 'Z':
                color = ('brown');
                break;
            case 'N':
            case 'Q':
            case 'R':
            case 'W':
                color = ('yellow');
                break;
            case '1':
            case '2':
            case '3':
                color = ('red');
                break;
            case '4':
            case '5':
            case '6':
                color = ('green');
                break;
            case '7':
                color = ('purple');
                break;
            default:
                color = ('white');
        }
        setColor(color);
    };

    useEffect(() => {
        updateColor();
    });

    const fetchMessages = async function (e) {
        console.log('This is the line name we are getting msgs for', lineName);
        e.preventDefault();
        try {
            setAllMessages([]);
            let combinedData = [];
            // get complaints from backend
            const BEresponse = await fetch(`/complaints/${lineName}`, {
                method: 'GET'
            });
            const data = await BEresponse.json();
            combinedData = [...data];
            console.log("Combined Data: ", combinedData);
            // get and filter service messages from MTA API
            const APIresponse = await fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts.json',
                {
                    method: 'GET',
                    headers: {
                        'x-api-key': process.env.MTA_API_KEY
                    }
                });
            const APIdata = await APIresponse.json();
            for (let index = 0; index < APIdata.entity.length; index++) {
                if (APIdata.entity[index].alert.description_text) {
                    const regex = /(?<=\[)[a-zA-Z0-9]+(?=\])/;
                    const text = APIdata.entity[index].alert.description_text.translation[0].text;
                    const train = text.match(regex);
                    if (!train) continue;
                    if (train[0] === lineName) {
                        combinedData.push({
                            message: text,
                            user: { username: 'MTA' }
                        });
                    }
                }
            }
            const totalMessages = [<h1 className='header'>{`Reports for ${lineName} Train`}</h1>];
            for (const msg of combinedData) {
                totalMessages.push(
                    <div className='message' key={`${msg.message}`}>
                        <p className='label'>Message: {msg.message}</p>
                        <p className='msgP'>From: {msg.user.username}</p>
                    </div>
                );
            };
            setAllMessages(totalMessages);

        } catch (err) {
            console.log(err);
        }
    };

    const submitMessage = async function (e) {
        e.preventDefault();
        try {
            await fetch(`/complaints/${lineName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id,
                    complaint: message
                })
            });
            fetchMessages();
        } catch (err) {
            console.log(err);
        }
    };


    console.log('These are the complaints received: ', allMessages);
    return (
        <div>
            <div className='mainContainerFlex'>
                <div className='centerLogo'>
                    <h1 className={`round-logo ${color}`}>{`${lineName}`}</h1>
                </div>
                <div className='horizForms'>
                    <div className='InfoFormContainer'>
                        <h1 className='header'>{`${lineName} Train Updates`}</h1>
                        <form onSubmit={fetchMessages}>
                            <select onChange={(e) => { setLineName(e.target.value); }} name="" id='infoForm'>
                                <option value=""></option>
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
                            <button className={'submit-btn'}>Get Train Info</button>
                        </form>
                    </div>
                    {(isLoggedIn) ?
                        [<div >
                            <h1 className='header'>{`Submit a Report for Train ${lineName}`}</h1>
                            <form onSubmit={submitMessage} id='complaintForm'>
                                <label >Message: </label>
                                <input id='textbox' value={`${message}`} onChange={(e) => { setMessage(e.target.value); }} type="text" />
                                <button className={'submit-btn'}>Submit Report</button>
                            </form>
                        </div>]
                        : <div></div>
                    }
                </div>
            </div>
            {allMessages}
        </div>
    );
};
