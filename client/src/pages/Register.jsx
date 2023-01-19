import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className="auth">
        <h1> Login </h1>
        <form>
            <input required type="text" placeholder='username' />
            <input required type="text" placeholder="email" />
            <input required type="text" placeholder='password' />
            <button> Login </button>
            <p> Błąd! </p>
            <span> Masz konto? <Link to="/login"> Zaloguj się!</Link> </span>
        </form>
    </div>
    </div>
  )
}

export default Register