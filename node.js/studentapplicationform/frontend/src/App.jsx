import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentApplicationform from './StudentApplicationform'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/applicationform' element={<StudentApplicationform/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
