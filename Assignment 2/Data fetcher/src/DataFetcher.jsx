import { useState,useEffect } from "react";
import React from 'react'


function DataFetcher({url}) {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
       {data ? (
        <div>
          {data.map(item => (
            <div>
            <h3 key={item.id}>{item.id}</h3>
            {(item.products).map(value=>(

                <div>
                    <p>{value.productId}</p>
                    <p>{value.quantity}</p>
                </div>
            ))}
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
