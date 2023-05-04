import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  
  
    
    
  return (
    <div>
      <h2>Home Page </h2>
      <Link to="/contact">Go to Contact Page</Link>
      <Link className="login" to="/login">Login</Link>
      {/* <li><a onClick={console.log('HII')}href="/auth">Login with GitHub</a></li> */}

    
    </div>
  )
}
