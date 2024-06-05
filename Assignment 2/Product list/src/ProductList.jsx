import React from 'react'
import './App.css'

function ProductList(props) {
  return (
    <div>
      <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt="" />
    </div>
    </div>
  )
}

export default ProductList

