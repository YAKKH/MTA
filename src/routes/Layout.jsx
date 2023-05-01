import React from 'react'
import Contact from './Contact'
import {Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from '../features/username/usernameSlice';
import { isSentSlice, updateSendStatus } from '../features/isSent/isSentSlice';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';

export default function Layout(props) {
    const currentUserName = useSelector((state)=> state.username.username);
    const sendStatus = useSelector((state)=> state.isSent.isSent)

    const dispatch = useDispatch();

    


    console.log(currentUserName)
  return (
    <div>
        <h1>Choo Choo Chat</h1>
        <Navbar />
      
        <MainContainer/>
            <button
          aria-label="Update name"
          onClick={() => {dispatch(updateName('ken'))
            console.log(currentUserName)
        }}>  UPDATE NAME</button>
          <button
          aria-label="Is Sent "
          onClick={() => {dispatch(updateSendStatus())
            console.log(sendStatus)
        }}
        > GRAB MESSAGES
        </button>  
       
    <Outlet/>
    </div>
    
  )
}
