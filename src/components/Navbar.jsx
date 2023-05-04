import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/account/accountSlice';


export default function Navbar () {
  const dispatch = useDispatch();
  const currentDisplay = useSelector((state) => state.account.isLoggedIn)

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <ul>
        <li className="list-options">
        <Link className="home" to="/">Home</Link>
        </li>
          {(!currentDisplay) ? [<li className="list-options">
            <Link className="login" to="/login">Login</Link>
          </li>,
          <li className="list-options">
            <Link className="signup" to="/signup">Signup</Link>
          </li>]
          : <li className="list-options">
          <Link onClick={handleClick} className="logout" to="/">Logout</Link>
        </li>
    
          }
      </ul>
      <Outlet/>
    </div>
  );
}
