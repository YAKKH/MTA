import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h2>Home Page </h2>
      <Link to="/signin">Go to Sign In</Link>
    </div>
  )
}
