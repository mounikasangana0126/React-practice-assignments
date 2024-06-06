import React from 'react'
import './App.css'
import DataFetcher from './DataFetcher'

function App() {
  return (
    <div >
    <DataFetcher url="https://dummyjson.com/recipes"/>
    </div>
  )
}

export default App
