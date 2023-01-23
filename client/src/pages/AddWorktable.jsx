import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddWorktable() {
    const [inputs, setInputs] = useState({
        data:"",
        typZmiany:"",
        pracownikLogin:""
    })
    const [err,setError] = useState(null)

    const navigate = useNavigate();

    const handleChange = e =>{
        setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post("/AddWorktable", inputs)
            navigate("/Worktables");
        } catch (err){
            setError(err.response.data);
        }
    };

  return (
    <div>
        <div className="AddWorktable">
            <h1> Dodanie dyżuru </h1>
            <input required type="date" name="data" placeholder="data" onChange={handleChange}/> <br />
            <input type="radio" name="typZmiany" value="poranna" onChange={handleChange}/> Poranna <br/>
            <input type="radio" name="typZmiany" value="nocna"onChange={handleChange}/> Nocna <br />
            <input type="text" name="idPracownika" placeholder="ID pracownika" onChange={handleChange}/> <br/>
            <button onClick={handleSubmit}> Dodaj dyżur! </button>
            {err && <p> {err} </p>}
        </div>
    </div>
  )
}

export default AddWorktable