import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/account/accountSlice';

export default function Login () {
  const [currUser, setUser] = useState('');
  const [currPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  function sendLogin () {
    fetch('/login', {
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
    <div className='login'>
    {/* <form action="">
      <label htmlFor="">Enter Username: </label>
      <input type="text" name="" id="" />
      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" />
    </form> */}
    <input placeholder="Enter your username" value={currUser} onChange={e => setUser(e.target.value)}/>
    <input placeholder="Enter your password" value={currPassword} onChange={e => setPassword(e.target.value)}/>
    <button onClick={sendLogin}>Login</button>

      <Link to="/">Login to HOME PAGE</Link>
      <a href="auth">Log In With Github</a>
    </div>
  );
}
