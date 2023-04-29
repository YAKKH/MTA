import React from 'react'
import Contact from './Contact'
import {Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from '../features/username/usernameSlice';
import { isSentSlice, updateSendStatus } from '../features/isSent/isSentSlice';


export default function Layout(props) {
    const currentUserName = useSelector((state)=> state.username.username);
    const sendStatus = useSelector((state)=> state.isSent.isSent)

    const dispatch = useDispatch();

    


    console.log(currentUserName)
  return (
    <div>
            <button
          aria-label="Update name"
          onClick={() => {dispatch(updateName('ken'))
            console.log(currentUserName)
        }}>  CLICK ME</button>
          <button
          aria-label="Is Sent "
          onClick={() => {dispatch(updateSendStatus())
            console.log(sendStatus)
        }}
        > IS SENT BUTTON 
        </button>  
    <Outlet/>
    </div>
    
  )
}
