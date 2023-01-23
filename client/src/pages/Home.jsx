import React from 'react'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

const Home = () => {
  const { currentUser, logout} = useContext(AuthContext)

  return (
    <div> Home Page</div>
  )
}

export default Home