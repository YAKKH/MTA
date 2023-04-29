import React from 'react'
import Contact from './Contact'
import {Outlet} from 'react-router-dom';
export default function Layout(props) {
  return (
    <div>
  <h1>Hello: {props.username}</h1>
    <Outlet/>
    </div>
    
  )
}
