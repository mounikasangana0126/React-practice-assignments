import { useState,useEffect } from "react";
import React from 'react'
import './App.css'


function DataFetcher({url}) {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
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

export default DataFetcher
