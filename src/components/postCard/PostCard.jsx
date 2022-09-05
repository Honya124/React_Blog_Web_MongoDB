import React from 'react'
import {Link} from 'react-router-dom'
import './postcard.css'

function PostCard({items}) {
  const PF="http://localhost:3001/images/"
  return (
    <div className='postcard'>
        {items.postPic && ( 
          //chwnka postPic tanha nawakayaty abet lagalia PF zya bain bo away ba tawawi addressman dast bkawet
          <img src={ PF + items.postPic } alt="img card" className='img-card' />
              )}
              <div className='category-item'>
                {items.categories.map((val,index)=>(
               <span key={index} className='categoryList'>{val.name}</span>  
                ))}
              </div>
              <div className='post-title'>
              <span
                 ><Link className='link' to={`/post/${items._id}`}>{items.title}</Link></span>
              </div>
              <div className='hour-post'>
                <span>{new Date(items.createdAt).toDateString()}</span>
              </div>
              <div className='description'>
              <span>{items.desc}</span>
              </div>
       
    </div>
  )
}

export default PostCard
