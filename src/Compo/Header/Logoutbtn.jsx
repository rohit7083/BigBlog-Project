import React from 'react'
import {useDispatch} from 'react-redux'
import  authService from '../../appwriter/config'
import {logout} from '../../store/authSlice'

function Logoutbtn() {
    const dispatch=useDispatch()
    const logouthandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <>
    <button>Logout</button>
    </>
  )
}

export default Logoutbtn