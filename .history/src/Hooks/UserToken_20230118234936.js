import { useEffect } from "react"
import { useState } from "react"


const UserToken = (user)=>{
   const [token ,settoken]=useState('')
   useEffect(()=>{

   console.log("USer token in toekn ",user)



   },[user])
   return [token,settoken]



}
export default UserToken;