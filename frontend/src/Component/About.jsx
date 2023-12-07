import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleClickRoute = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClickRoute}>Naviage to Home</button>
    </div>
  )
}

export default About