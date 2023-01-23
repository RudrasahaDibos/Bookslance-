import { useEffect } from "react"
import { useState } from "react"


const UserToken = (user)=>{
   const [token ,settoken]=useState('')
   useEffect(()=>{
    const email = user?.user?.email;
    const currentuser = {email : email }
    if(user){
        fetch(`http://localhost:5000/user/${email}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(currentuser)
        })
        .then(res=>res.json())
    }



   },[user])
   return [token,settoken]



}
export default UserToken;