export const LoginStart=(userCredentails)=>({
 type:"LOGIN_START"
})

export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
})

export const LoginFailuer=()=>({
    type:"LOGIN_FAILURE"
})

export const UpdateStart=(userCredentails)=>({
    type:"UPDATE_START"
})
export const UpdateSuccess=(user)=>({
    type:"UPDATE_SUCCESS",
    payload:user
})
export const UpdateFailuer=()=>({
    type:"UPDATE_FAILUER"
})

export const Logout=()=>({
    type:"LOGOUT"
})


