import React from 'react'
import Contact from './Contact'
import {Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from '../features/username/usernameSlice';


export default function Layout(props) {
    const currentUserName = useSelector((state)=> state.username.username);
    const dispatch = useDispatch();
    console.log(currentUserName)
  return (
    <div>
  {/* <h1>Hello: {props.username}</h1> */}
      
      <button
          aria-label="Update name"
          onClick={() => {dispatch(updateName('ken'))
            console.log(currentUserName)
        }}
        >
            CLICK ME
        </button>
        
        
    <Outlet/>
    </div>
    
  )
}
