import { useEffect } from "react";
import { useState } from "react";


const useAdmin = () => {
  const [admin ,setadmin ] = useState(false);
  useEffect(()=>{

   const email = user?.email;
   if(email)
{
    fetch(`http://localhost:5000/admin/${email}`,{}).then(res=>)
}

  },[user])
 return[admin]




};

export default useAdmin;