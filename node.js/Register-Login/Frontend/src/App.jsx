
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
