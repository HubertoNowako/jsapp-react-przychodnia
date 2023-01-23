import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";

function Worktables() {
  const [worktables, setWorktables] = useState ([])

  useEffect(() =>{
    const fetchData = async ()=>{
        try{
            const res = await axios.get("/worktables");
            setWorktables(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
  },[])

  return (
    <div className="worktables">
            
        {worktables.map((worktable) => (
            <table key={worktable.idDyżuru}>
                <tbody>
            <tr>
                <td>Pracownik:</td>
                <td>Data: </td>
                <td>Typ zmiany:</td>
            </tr>
            <tr>
                <td>{worktable.pracownik}</td>
                <td>{worktable.data2} </td>
                <td>{worktable.typZmiany} </td>
            </tr>
            </tbody>
            </table>
            ))} 
            
    </div>
  )
}

export default Worktables