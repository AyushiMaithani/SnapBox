import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className=" bg-[#8683CC] ">
                            <div className="mb-11 flex justify-around ">
                                <div className='flex flex-col'>
                                    <Logo width="100px" />
                                <h1 className='text-[5rem] font-[550] font-serif leading-none tracking-tighter'>snapbox</h1>
                                </div>
                            <div className='mt-8'>
          <h4 className='pb-14 text-white'> Socials</h4>
          {["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>  

          <div className='mt-8'>
          <h4 className='pb-14 text-white'> Socials</h4>
          {["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>  
          </div>
            
        </footer>
  )
}

export default Footer