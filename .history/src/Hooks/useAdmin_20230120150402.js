import { useEffect } from "react";
import { useState } from "react";


const useAdmin = () => {
  const [admin ,setadmin ] = useState(false);
  const [user] =useAuth
  useEffect(()=>{

   const email = user?.email;
   if(email)
{
    fetch(`http://localhost:5000/admin/${email}`,{

    }).then(res=>res.json())
    .then(data=>{
      setadmin(data.admin)
    })
}

  },[user])
 return[admin]




};

export default useAdmin;