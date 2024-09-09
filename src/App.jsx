import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwriter/auth"
import {login ,logout} from './store/store'
import './App.css'

function App() {

  const [loading, setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService .getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })

.finally(()=>setLoading(false))

  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
