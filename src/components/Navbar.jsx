import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {
  const navigate = useNavigate();
  const currentDisplay = useSelector((state) => state.account.isLoggedIn)
  return (
    <div>
      <ul className='navBarCSS'>
        <li className="list-options">
          <Link className="home" to="/">Home</Link>
        </li>
        {(!currentDisplay) ? [<li className="list-options">
          <Link className="" to="/login">Login</Link>
        </li>,
        <li className="list-options">
          <Link className="signup" to="/signup">Signup</Link>
        </li>] : null
        }
      </ul>
      <Outlet />
    </div>
  );
}
