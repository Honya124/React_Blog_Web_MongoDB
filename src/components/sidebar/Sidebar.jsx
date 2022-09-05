import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare , FaInstagramSquare} from 'react-icons/fa'
import {Link } from 'react-router-dom'
import Tower from '../../assets/image/tower.jpg'
import './sidebar.css'
function Sidebar() {
const [category , setCategory]=useState([])
  useEffect(()=>{
    const getCategory=async()=>{
      const cateData=await Axios.get("/categories/allCategory") 
      setCategory(cateData.data)
    }
    getCategory()
  },[])
  return (
    <div className='sidebar'>
        <div className='sidebar-container'>
     <div className='about-me'>
        <div className='sidebar-title'> 
            <span>ABOUT ME</span>
        </div>
         <div className='img-sidebar'>
            <img src={Tower} alt="tower img" />
         </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus sint suscipit quisquam explicabo ex eius dolorem autem,
              quae in debitis? 
            Impedit unde quasi beatae natus quidem ea in, sit vitae!</p>
     </div>

     <div className='categories'>
        <div className='sidebar-title'>
            <span>CATEGORIES</span>
        </div>
        <div className='category-list'>
            <ul className='category-ul-list'>
              {category.map((val,index)=>(
                     <li key={index}><Link className="link" to={`/categories/allCategory?cat=${val.name}`}>{val.name}</Link></li>
              ))}
             
            </ul>
        </div>
     </div>

     <div className='follow-us'>
     <div className='sidebar-title'>
            <span>FOLLOW US</span>
        </div>
        <div className='social-icon'>
        <AiFillFacebook   className='icon-social-sidebar'/>
     <AiFillTwitterSquare  className='icon-social-sidebar'/>
     <FaPinterestSquare className='icon-social-sidebar' />
     <FaInstagramSquare  className='icon-social-sidebar'/>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Sidebar
