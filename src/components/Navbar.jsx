import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/account/accountSlice';


export default function Navbar() {
  const dispatch = useDispatch();
  const currentDisplay = useSelector((state) => state.account.isLoggedIn)

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/MTA_NYC_logo.svg/1862px-MTA_NYC_logo.svg.png' />
      <ul className='navBarCSS'>
        <li className="list-options">
          <Link className="home" to="/">Home</Link>
        </li>
        {(!currentDisplay) ? [<li className="list-options">
          <Link className="" to="/login">Login</Link>
        </li>,
        <li className="list-options">
          <Link className="signup" to="/signup">Signup</Link>
        </li>]
          : <li className="list-options">
            <Link onClick={handleClick} className="logout" to="/">Logout</Link>
          </li>

        }
      </ul>
      <Outlet />
    </div>
  );
}
