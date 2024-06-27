
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
