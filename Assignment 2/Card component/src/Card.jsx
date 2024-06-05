import React from 'react'
import './App.css'

function card(props) {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt="" />
    </div>
  )
}

export default card
