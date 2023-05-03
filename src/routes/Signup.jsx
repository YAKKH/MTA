import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/account/accountSlice';


export default function Signup() {
  const [currUser, setUser] = useState('');
  const [currPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  function sendInfo () {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: currUser,
        password: currPassword
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.isLoggedIn) {
          dispatch(login({
            username: data.username,
            _id: data._id
          }));
        } else {
          alert('you fail');
        }
      });
  }
  return (
    <div className='signup'>
    <input placeholder="Enter username..." value={currUser} onChange={e => setUser(e.target.value)}/>
    <input placeholder="Enter password..." value={currPassword} onChange={e => setPassword(e.target.value)}/>
    <button onClick={sendInfo}>SUBMIT</button>
      <Link to="/">Login to HOME PAGE</Link>
    </div>
  );
}
