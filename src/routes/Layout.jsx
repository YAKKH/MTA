import React from 'react'
import SignIn from './SignIn'
import {Outlet} from 'react-router-dom';
export default function Layout() {
  return (
    <div>
  
    <Outlet/>
    </div>
    
  )
}
