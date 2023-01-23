import React from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

const Navbar = () => {

  const { currentUser, logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          LOGO
        </div>
        <div className='links'>
          <Link className="link" to="/"><h1>HOME</h1></Link>
          {currentUser ?
          <Link className="link" to="/worktables"><h1>DYŻURY</h1></Link>:
          <h1>🔒</h1>}
        </div>
        <div className='panel'>
          <span> {currentUser?.login} </span>
          {currentUser ? (<span className='logout' onClick={logout}> Wyloguj! </span>) : (<Link className='link' to="/login"> Zaloguj się! </Link>)}
          {currentUser ? (<span className="dodaj">
            <Link to="/AddWorktable">Dodaj</Link>
          </span>): <span></span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar