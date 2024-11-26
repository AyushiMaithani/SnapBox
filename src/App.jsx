import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className=" bg-black flex justify-center items-center p-5 ">
      <div className="flex flex-col bg-black w-[80vw]">
        <Header />
        <hr />
        <main className='min-h-screen text-white '>
         <Outlet />
        </main>
        <Footer />
      </div>
      </div>
  ) : null

  
}

export default App