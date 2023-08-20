import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='inline-block'>Home</div>
      <Link to="/assistir" className='bg-yellow-200 px-8 py-2 border-solid border-yellow-700 border-2 rounded-lg text-yellow-700 hover:font-extrabold'>Vamos assistir!</Link>
    </div>
  )
}

export default Home