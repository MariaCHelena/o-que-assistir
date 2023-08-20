import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='absolute top-0 flex justify-center w-full h-14 items-center bg-green-400 my-0 mx-auto space-x-20 text-lime-800 text-xl'>
        <Link to="" className='hover:underline hover:text-white transition-all ease-in-out duration-150 cursor-pointer font-bold'>Home</Link>
        <Link to="/contact" className='hover:underline hover:text-white transition-all ease-in-out duration-150 cursor-pointer font-bold'>Contatos</Link>
    </nav>
  )
}

export default Navbar