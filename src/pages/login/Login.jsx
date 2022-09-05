import React,{ useRef , useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { Context } from '../../context/Context'
import { LoginStart, LoginSuccess, LoginFailuer } from '../../context/Actions'
import './login.css'

function Login() {
  let history=useNavigate() 
  const emailRef=useRef()
  const passwordRef=useRef()
  const {dispatch}=useContext(Context)
  const handleSubmit=async (e)=>{
    e.preventDefault()
    dispatch(LoginStart());
  try{
    await Axios.post("/auth/login",{
      email:emailRef.current.value,
      password:passwordRef.current.value
    }).then((response)=>{
      dispatch(LoginSuccess( response.data.user)); 
      localStorage.setItem("user",JSON.stringify(response.data.token))
          history("/")
    })
  }catch(err){
    console.log(err)
    dispatch(LoginFailuer());
  }
  }
  return (
    <div className='login'>
      <span className='login-title'>Login</span>
      <form className='formLogin' onSubmit={handleSubmit}>
         <label className='input-title' >Email</label>
         <input className='login-input' ref={emailRef}
          type="email" placeholder='Enter your email...' />
         <label  className='input-title'>Password</label>
         <input  className='login-input' ref={passwordRef}
         type="password" placeholder='Enter your Password...' />
         <button className='login-btn' type='submit'
         >Login</button>
         <button className='registerbtn'
         ><Link to="/register" className='link'>Register</Link></button>
      </form>
    </div>
  )
}

export default Login
