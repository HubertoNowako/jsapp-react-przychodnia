import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    imie:"",
    nazwisko:"",
    login:"",
    password:"",
  })
  const [err,setError] = useState(null)

  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("auth/register", inputs)
      navigate("/login");
    }catch(err){
      setError(err.response.data);
    }
  };

  return (
    <div>
        <div className="auth">
        <h1> Rejestracja </h1>
        <form>
            <input required type="text" name="imie" placeholder='imię' onChange={handleChange}/>
            <input required type="text" name="nazwisko" placeholder='nazwisko' onChange={handleChange}/>
            <input required type="text" name="login" placeholder='login' onChange={handleChange}/>
            <input required type="password" name="password" placeholder="hasło" onChange={handleChange}/>
            <button onClick={handleSubmit}> Zarejestruj </button>
            {err && <p> {err} </p>}
            <span> Masz konto? <Link to="/login"> Zaloguj się!</Link> </span>
        </form>
    </div>
    </div>
  )
}

export default Register