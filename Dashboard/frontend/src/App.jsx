import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Prepare from './pages/prepare'
import Action from './pages/Action'
import Report from './pages/Report'

function App() {
  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <div className='pt-15'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/prepare' element={<Prepare/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/report' element={<Report/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
