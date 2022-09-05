import React,{ useState ,useContext } from 'react'
import {MdAdd} from 'react-icons/md'
import { Context } from '../../context/Context'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './write.css'

function Write() {
  const [file, setFile]=useState('')
  const [title, setTitle]=useState('')
  const [desc ,setDesc]=useState('')
  const {user}=useContext(Context)
  let history=useNavigate()
  const handleSubmit=async(e)=>{
      e.preventDefault()
      const newData={
        title,
        desc,
        username:user.username,
      }
    if(file){
      const data=new FormData()
      const filename=Date.now()+file.name
      data.append("name",filename)
      data.append("file",file)
      newData.postPic=filename
        try{
         await Axios.post("/upload",data)
      }catch(error){
        console.log(error) 
      }
    }
    try{
      await Axios.post("/post/createPost",newData).then((response)=>{
       history(`/post/${response.data._id}`)
       })
     }catch(err){
     console.log(err)
     }
  
  }
  return (
    <div className='write'>
     {/* <div className='write-container'> */}
       <div className='write-img'>
        {file && (
        <img src={URL.createObjectURL(file)} alt="mountain img" />
        )}
       </div>
       <div className='input-section'>
        <form className='choose-file' onSubmit={handleSubmit}>
        <label htmlFor="file"><MdAdd /></label>
        <input type="file" style={{display:"none"}}  id='file'
        onChange={(e)=>setFile(e.target.files[0])}/>
        <div className='title-section'>
        <input type="text" placeholder='Title' autoFocus={true}
        onChange={(e)=>setTitle(e.target.value)} />
        <button className='btnWrite' type='submit'
        >Publish</button>
        </div>
        </form>
        <div className='textArea writeText'>
        <textarea placeholder='Write about your title' rows="7" 
        onChange={(e)=>setDesc(e.target.value)}/> 
       </div>
       </div>
       
     </div>
    // </div>
  )
}

export default Write
