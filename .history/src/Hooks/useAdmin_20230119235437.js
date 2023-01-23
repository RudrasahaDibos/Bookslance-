import { useEffect, useState } from "react"

const useAdmin = (user)=>{
    const [admin ,setadmin] = useState(false)
    const [adminloading ,setadminloading] = useState(true)
    useEffect(()=>{

    const email = user?.email;
    if(email){
        fetch(`http://localhost:5000/admin/${email}`,{
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('accesstoken')} `
            }
        })
        .then(res => res.json())
        .then(data => {
            setadmin(data.admin);
            setadminloading(false)
        })
    }


    },[user])
    return [admin,adminloading]
}
export default useAdmin;