import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
        <h1> Login </h1>
        <form>
            <input required type="text" placeholder='username' />
            <input required type="text" placeholder='password' />
            <button> Login </button>
            <p> Błąd! </p>
            <span> Nie masz konta? <Link to="/register"> Zarejestruj się!</Link> </span>
        </form>
    </div>
  )
}

export default Login