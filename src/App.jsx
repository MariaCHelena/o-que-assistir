import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='bg-blue-100 h-screen pt-14 flex justify-between items-center flex-col'>
      <Navbar />
      <h1>O que devo assistir?</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App