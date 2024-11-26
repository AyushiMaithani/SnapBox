import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer>
                            <div className=" flex justify-between text-white ">
                                <div className='flex flex-col'>
                                    <Logo width="100px" />
                                <h1 className='text-[5rem] font-[550] font-serif leading-none tracking-tighter'>snapbox</h1>
                                </div>
                            <div className='mt-8 '>
          <h4 className='pb-14'> Socials</h4>
          {["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>  

          <div className='mt-8 '>
          <h4 className='pb-14'> Socials</h4>
          {["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>  

          <div  className='mt-8 w-[30%]'>
            Snapshot is your digital time capsule, capturing life's most precious moments. Easily store, share, and relive your memories with friends and family in a stunning, user-friendly app
            </div>
          </div>   

           
        </footer>
  )
}

export default Footer