import React from 'react'
import PostCard from '../../components/postCard/PostCard'
import './posts.css'
function Posts({item}) {
  return (
    <div className='posts'>
      {item.map((val, index)=>(
       <PostCard items={val} key={index} /> 
      )
      )} 
    </div>
  )
}

export default Posts
