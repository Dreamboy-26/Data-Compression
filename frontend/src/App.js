import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Signin from './component/Signin'
import UserDetails from './component/UserDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default App
