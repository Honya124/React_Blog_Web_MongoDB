import React, { useContext ,useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import {HiOutlineUserCircle} from 'react-icons/hi'
import { Context } from '../../context/Context';
import {UpdateStart ,UpdateSuccess, UpdateFailuer} from '../../context/Actions'
import  Axios  from 'axios';
// import { useNavigate } from 'react-router-dom';
import './settings.css';



function Settings() {
   const {user , dispatch}=useContext(Context)
   const[newUsername, setNewUsername]=useState('')
   const [newEmail, setNewEmail]=useState('')
   const [newPassword, setNewPassword]=useState('')
   const [file, setFile]=useState('')
   const [success, setSuccess]=useState(false)
  const PF="http://localhost:3001/images/"

// const history=useNavigate()  
   const handleSubmit=async(e)=>{ 
      e.preventDefault()
      dispatch(UpdateStart())
      const updateElements={
         userId:user._id,
         username:newUsername,
         email:newEmail,
         password:newPassword,
      }
      if(file){
         const data=new FormData()
         const filename=Date.now()+file.name
         data.append("name",filename)
         data.append("file",file)
         updateElements.profilePic=filename
         try{
            await Axios.post("/upload",data).then((response)=>{
               dispatch(UpdateSuccess(response.data))
            })
         }catch(err){
            console.log(err)
            dispatch(UpdateFailuer())
         }
      }
    try{
     await Axios.put(`/user/update/${user._id}`,updateElements)
     setSuccess(true)
    }catch(err){
      console.log(err)
    }
   }

   // delete user
//    const deleteAccount=async()=>{
// await Axios.delete(`/user/delete/${user._id}`,{userId:user._id},
// {headers:{accessToken:localStorage.getItem("user")}})
// dispatch(Logout())
// localStorage.removeItem("user")
//    history("/login")
// }
  return (
    <div className='settings'>
    <div className='settingsWraper'>
     <div className='editPP'>
        <span>Update Your Account</span>
        <span 
      //   onClick={deleteAccount} 
        >Delete Account</span>
     </div>
     <div className='userInfo'>
        <span>Profile Picture</span>
            <form className='formAccout' onSubmit={handleSubmit}>
               <div className='userPP'>
               <img src={ file ?URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                <label htmlFor='userAccount'
                 ><HiOutlineUserCircle /></label>
                <input type="file"  className='inputUserPP'
                id='userAccount'  style={{display:"none"}}
                onChange={(e)=>setFile(e.target.files[0])}/>
               </div>
               <div className='myAccount'>
                <label >Username</label>
                <input type="text" placeholder={user.username} 
                onChange={(e)=>setNewUsername(e.target.value)}/>
               </div>
               <div className='myAccount'>
                <label >Email</label>
                <input type="email" placeholder={user.email}
                 onChange={(e)=>setNewEmail(e.target.value)} />
               </div>
               <div className='myAccount'>
                <label >Password</label>
                <input type="password"  
                placeholder='Password'
                 onChange={(e)=>setNewPassword(e.target.value) }/>
               </div>
               <div className='btnSettings'>
                <button type='submit'>Update</button>
               </div>
               {success &&(
                  <span className='text-result'>Your account has been updated.</span>
               )}

            </form>
     </div>
    </div>
    <Sidebar />
    </div>
  )
}

export default Settings
