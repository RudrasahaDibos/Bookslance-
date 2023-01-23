import React from 'react';

const Deleteuser = ({refetch,removeuser,setremoveuser}) => {
    const {email,name} = re
   const handaleuserdelete = (email)=>{
    fetch(`http://localhost:5000/user/${email}`,{
     method:'DELETE',
     headers:{
       authorization:`Bearer ${localStorage.getItem('accesstoken')} `
   }


    }) .then(res=>res.json(email))
   .then(data =>{
     if(data.deletedCount){
         toast.success(`Tumi Doctors Valo na MR/MS ${name}`)
         setDoctorsmodal(null)
         refetch()
     }
 })
    
    return (
        <div>
            
        </div>
    );
};

export default Deleteuser;