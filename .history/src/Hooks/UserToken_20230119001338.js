import { useEffect } from "react"
import { useState } from "react"


const UserToken = (user)=>{
   const [token ,settoken]=useState('')
   useEffect(()=>{
    const email = user?.user?.email;
    const 



   },[user])
   return [token,settoken]



}
export default UserToken;