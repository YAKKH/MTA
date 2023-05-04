import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/account/accountSlice';


export default function Successful() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Handle Auth Login (*/
  function handleAuth(e) {
    // e.preventDefault();
    dispatch(login({
      username: "Kenny",
      _id: 99
    }));
    navigate('/');
  }
  return (
    <div>
      <div>You successfully logged in!</div>
      <button onClick={(e) => handleAuth(e)}></button>
    </div>
  );
};
