import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/account/accountSlice';

export default function Login() {
  const navigate = useNavigate()
  const [currUser, setUser] = useState('');
  const [currPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  function sendLogin() {
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
          navigate('/');
        } else {
          alert('you fail');
        }
      });
  }


  return (
    <div className='bodyContainer'>
      <div className='form'>
        {/* <form action="">
      <label htmlFor="">Enter Username: </label>
      <input type="text" name="" id="" />
      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" />
    </form> */}
        <label >Username: </label>
        <input placeholder="Enter your username" value={currUser} onChange={e => setUser(e.target.value)} />
        <label >Password: </label>
        <input placeholder="Enter your password" value={currPassword} onChange={e => setPassword(e.target.value)} />
        <button onClick={sendLogin}>Login</button>
        <button><Link to="/">Return to Home</Link></button>

      </div>
    </div>
  );
}
