import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [inputs, setInputs] = useState({
    login:"",
    password:"",
  })
  const [err,setError] = useState(null)

  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("auth/login", inputs)
      navigate("/");
    }catch(err){
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
        <h1> Logowanie </h1>
        <form>
            <input required type="text" placeholder='username' name="login" onChange={handleChange}/>
            <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}> Login </button>
            {err && <p> {err} </p>}
            <span> Nie masz konta? <Link to="/register"> Zarejestruj się!</Link> </span>
        </form>
    </div>
  )
}

export default Login