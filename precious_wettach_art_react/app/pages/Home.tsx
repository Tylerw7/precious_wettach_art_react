import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-[150px] flex flex-col'>
        <h2>Home</h2>
        <Link to="/gallery" className='text-purple-500'>Gallery</Link>
        <Link to="/about" className='text-purple-500'>About</Link>
    </div>
  )
}

export default Home