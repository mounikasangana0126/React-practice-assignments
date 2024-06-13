import React from 'react'
import {useEffect,useState} from 'react'
import '../App.css'
import { AddToCart } from '../actions/AddToCart'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const count=useSelector(state=>state.data)
    const dispatch=useDispatch()
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => {
        setData(data.recipes)
        console.log(data);
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
        {data ? (
        <div className="card-list">
          {data.map(item => (
            <div className="card">
            <h3>{item.name}</h3>
            <h5>{item.cuisine}</h5>
            <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Cart
