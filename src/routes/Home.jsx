import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  
  const handleAuth = () => {
    
  }

  return (
    <div>
      <h2>Home Page </h2>
      <Link to="/contact">Go to Contact Page</Link>
      <Link className="login" to="/login">Login</Link>
      <li><a href="/auth">Login with GitHub</a></li>
    </div>
  )
}
