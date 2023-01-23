import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase.init";


const useAdmin = (user) => {
  const [admin ,setadmin ] = useState(false);
  const [adminloading ,setadminloading] =useState(true) 
  useEffect(()=>{

   const email = user?.email;
   if(email)
{
    fetch(`http://localhost:5000/admin/${email}`,{

    }).then(res=>res.json())
    .then(data=>{
      setadmin(data.admin);
      setadminloading(false)
    })
}

  },[user])
 return[admin,adminloading]




};

export default useAdmin;