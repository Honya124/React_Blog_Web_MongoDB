import React from 'react'
import { useEffect,useState } from 'react'
import Header from '../../components/header/Header'
import Posts from "../../components/posts/Posts"
import Sidebar from '../../components/sidebar/Sidebar'
import Axios from 'axios'
import './home.css'
import { useLocation } from 'react-router-dom'
function Home() {
const [posts ,setPosts]=useState([])
const {search}=useLocation()

useEffect(()=>{
  const fetchPosts=async()=>{
    await Axios.get("/post/allPost").then((response)=>{
       setPosts(response.data)
    })
  }
  fetchPosts()
},[search])
  return (
    <>
      <Header />
      <div className='home'>
      <Posts item={posts} />
      <Sidebar />
      </div>
    </>
  )
}

export default Home
