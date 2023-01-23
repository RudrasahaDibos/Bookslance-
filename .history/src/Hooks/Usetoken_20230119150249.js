import { useEffect } from "react"
import { useState } from "react"


const Usetoken = user =>{
   const [token ,settoken]=useState('')
   useEffect(()=>{
    const email = user?.user?.email;
    const currentuser = {email : email }
    if(user){
        fetch(`http://localhost:5000/user/${email}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(currentuser)
        })
        .then(res=>res.json())
        .then(data => {
            console.log('data inside usetoken',data)
            const accesstoken = data.token;
           localStorage.setItem()
            settoken(accesstoken)
        })
    }



   },[user])
   return [token,settoken]



}
export default Usetoken ;