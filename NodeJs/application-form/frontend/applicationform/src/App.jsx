import { useState } from 'react'
import './App.css'
import ApplicationForm from './ApplicationForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/applicationform' element={<ApplicationForm/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
