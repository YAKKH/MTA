import React from 'react'
import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <div className='login'>

    <form action="">
      <label htmlFor="">Enter Username: </label>
      <input type="text" name="" id="" />
      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" />
    </form>



      <Link to="/">Login to HOME PAGE</Link>
    </div>
  )
}
