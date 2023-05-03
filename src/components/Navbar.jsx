import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar () {
  return (
    <div>
      <ul>
        <li className="list-options">
        <Link className="home" to="/">Home</Link>
        </li>
        <li className="list-options">
        <Link className="login" to="/login">Login</Link>
        </li>
        <li className="list-options">
          <Link className="signup" to="/signup">Signup</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}
