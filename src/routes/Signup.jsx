import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/account/accountSlice';


export default function Signup() {
  const [currUser, setUser] = useState('');
  const [currPassword, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function sendInfo() {
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
          navigate('/');
        } else {
          alert('you fail');
        }
      });
  }
  return (
    <div className='bodyContainer'>
      <div className='form'>
        <label >Username: </label>
        <input placeholder="Enter username..." value={currUser} onChange={e => setUser(e.target.value)} />
        <label >Password: </label>
        <input placeholder="Enter password..." value={currPassword} onChange={e => setPassword(e.target.value)} />
        <button onClick={sendInfo}>Signup</button>
        <button><Link to="/">Return to Home</Link></button>

      </div>
    </div>
  );
}
