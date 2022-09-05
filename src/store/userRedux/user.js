import {createSlice} from '@reduxjs/toolkit'
const initialState={
    userr:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false
}

const userSlice=createSlice({  
    name:"user",
    initialState:initialState,
    reducers:{
    login(state,action){
      const newItem=action.payload
        state.userr=newItem
       state.isFetching=true

    },
    logout(state){
      state.userr=null
      state.isFetching=false
      localStorage.clear()
    }
    }  
})

export const userActions=userSlice.actions
export default userSlice