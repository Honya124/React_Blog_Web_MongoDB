import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SingleCard from '../../components/singleCard/SingleCard'
import './singlepage.css'

function SinglePage() {
  return (
    <div className='singlePage'> 
        <SingleCard />
      <Sidebar />
    </div>
  )
}

export default SinglePage 
