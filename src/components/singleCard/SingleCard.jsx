import React, { useEffect ,useState,useContext} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import Axios from 'axios'
import {FiEdit,FiDelete} from 'react-icons/fi'
import { Context } from '../../context/Context'
import './singlecard.css'
function SingleCard() {
  const [singlePost,setSinglePost]=useState({})
  const [title,setTitle]=useState('')
  const [desc, setDesc]=useState('')
  const [updateMode, setUpdateMode]=useState(false)
  let { postId } = useParams();
  const {user}=useContext(Context)
  let history=useNavigate()
  const PF="http://localhost:3001/images/"
  // const location=useLocation()
  // const path=location.pathname.split("/")[2] this is like useParams (/)bama leki jya akainawa aw index[2]=>/post/72424672 aw id axir
  useEffect(()=>{
   const getSinglePost=async()=>{
    const singleData=await Axios.get(`/post/getPost/${postId}`) 
      setSinglePost(singleData.data)
      setTitle(singleData.data.title)
      setDesc(singleData.data.desc)
    }
      getSinglePost()
  },[postId])

  const deletePost=async()=>{
    try{
      await Axios.delete(`/post/deletePost/${postId}`,{data:{postId:postId}}).then(()=>history("/"))
    }catch(err){
      console.log(err)
    }
  }
  const updatePost=async()=>{ 
  await Axios.put(`/post/updatePost/${postId}`,{
    postId,
    username:user.username,
    title,
    desc
  },{headers:{accessToken:localStorage.getItem("user")}})
  setUpdateMode(false)
  }
  return (
    <div className='single-card'>
      <div className='our-card'>
        {singlePost.postPic && (
             <img src={PF+singlePost.postPic} alt=" img" />
        )}
        {updateMode ? (
          <div className='title-page-input'>
         <input type="text" 
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         autoFocus/>
          </div>
        ):(
          <div className='title-page'>
          <span>{title}</span>
         
          {user?.username===singlePost.username &&(
             <div className='icon-edit'> 
            <FiEdit className='icon-1'
            onClick={()=>setUpdateMode(true)} />
               <FiDelete className='icon-2' 
               onClick={deletePost} />
                </div>
          )}
          
       </div>
        )} 
    
     <div className='author-info'>
        <span className='author'>Author:<b><Link  className='link' to={`/?user=${singlePost.username}`}>{singlePost.username}</Link></b></span>
        <div className='single-hour'>
        <p>{new Date(singlePost.createdAt).toDateString()}</p>
        </div>
     </div>
     
      {updateMode ?(
         <div className='desc-page-input'>
        <textarea rows="3"
        value={desc}
        onChange={(e)=>setDesc(e.target.value)} />
        </div>
        
      ):(
        <div className='desc-single'>
        <p>{desc}</p>
        </div>
      )}
      {updateMode &&(
        <div className='action-element'>
           <button className='input-update'
           onClick={updatePost}
           >Update</button>
        </div>
       
      )}
     </div>
    </div>
  )
}

export default SingleCard
