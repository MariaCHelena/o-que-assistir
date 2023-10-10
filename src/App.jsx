import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='bg-blue-100 h-screen pt-14 '>
        <h1 className="grow">O que devo assistir?</h1>
        <Outlet className="grow"/>
        <p className="grow-0 self-end">Footer</p>
      </div>
    </>
  )
}

export default App