import React from 'react'
import { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import Axios from 'axios'
import './register.css'

function Register() {
  const [username ,setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [password ,setPassword]=useState('')
  const [error , setError]=useState(false)
let history=useNavigate()
  // register user
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      setError(false)
      await Axios.post('/auth/register',{
        username, email, password
       }).then(()=>[
        history('/login')
       ])
    }catch(err){
      setError(true)
      console.log(err) 
    }
  }
  return ( 
    <div className='register'>
      <span className='register-title'>Register</span>
      <form className='formRegister' onSubmit={handleSubmit}>
      <label className='input-title' >Username</label>
         <input className='register-input'
          type="text" placeholder='Enter your username...' 
          onChange={(e)=>setUsername(e.target.value)}/>
         <label className='input-title' >Email</label>
         <input className='register-input'
          type="email" placeholder='Enter your email...'
          onChange={(e)=>setEmail(e.target.value)} />
         <label  className='input-title'>Password</label>
         <input  className='register-input'
         type="password" placeholder='Enter your Password...' 
         onChange={(e)=>setPassword(e.target.value)}/>
         <button className='registerBtn' type='submit'
         >Register</button>
        {error && <h1 className='errMessage'>Something Wrong!</h1> }
         <button className='loginbtn'
         ><Link to='/login' className="link">Login</Link></button>
      </form>
    </div>
  )
}

export default Register
