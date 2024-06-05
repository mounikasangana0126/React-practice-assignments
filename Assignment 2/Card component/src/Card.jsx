import React from 'react'
import './App.css'

function card({title,description,image}) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default card
