import React from 'react'
import HeaderImage from '../../assets/image/headerbg.jpg'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <div className='header-title'>
          <span className='header-title-sm'>React & Node</span>
          <span className='header-title-lg'>Blog</span> 
      </div>
      <img className='header-bg-Img'
       src={HeaderImage} alt="header img" />
    </div> 
  ) 
}

export default Header
