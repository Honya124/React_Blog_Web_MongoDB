import React,{useContext }  from 'react'
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare , FaInstagramSquare} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { Logout } from '../../context/Actions'
import './topbar.css'


function TopBar() {
  const {user,dispatch}=useContext(Context)
  const PF="http://localhost:3001/images/"

  const logoutButtons=()=>{
dispatch(Logout())
localStorage.removeItem("user")
  }
  return (
    <div className='top-section'>
      <div className='left-top' >
     <AiFillFacebook   className='icon-social'/>
     <AiFillTwitterSquare  className='icon-social'/>
     <FaPinterestSquare className='icon-social' />
     <FaInstagramSquare  className='icon-social'/> 
      </div>
      <div className='center-top'>
        <ul className='top-list'>
          <li className='listItem'><Link className='link'  to='/'>HOME</Link></li>
          <li className='listItem'><Link className='link'  to='/about'>ABOUT</Link></li>
           <li className='listItem'><Link className='link'  to="contact">CONTACT</Link></li>
           <li className='listItem'><Link className='link'  to='/write'>WRITE</Link> </li>
          {user && (
               <li className='listItem'
               onClick={logoutButtons}
               ><Link className='link'  to='/login'>LOGOUT</Link></li>
          )}
        </ul>
      </div>
      <div className='right-top'>
        {user ? (
          <Link to='/settings'>
           <img src={ PF+user.profilePic} alt="userIcon" />
          </Link>
        ):( 
          <ul className='top-list'>
          <li className='listItem'><Link className='link'  to='/login'>LOGIN</Link></li>
          <li className='listItem'><Link className='link'  to='/register'>REGISTER</Link></li>
          </ul>
        )}
        <div className='search-icon'>
            <GoSearch /> 
        </div>
      </div>
    </div>
  )
}

export default TopBar
