import React from 'react'
import logo from '../assets/logo.png';

function Logo({width=" 150px"}) {
  return (
    <div className='rounded-xl overflow-hidden w-[110px] h-[150px]'><img src={logo} alt=""/></div>
  )
}

export default Logo