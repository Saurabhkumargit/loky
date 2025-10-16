import React from 'react'
import assets from '../assets/assets'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Bg image */}
      <img src={assets.bgImage} alt="" className='absolute top-0 left-0 w-full h-full -z-1 object-cover' />
    </div>
  )
}

export default Login