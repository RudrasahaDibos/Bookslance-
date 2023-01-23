import React from 'react';

const Deleteuser = ({refetch,removeuser,setremoveuser}) => {
    const {email,name} = removeuser;
   const handaleuserdelete = (email)=>{
    fetch(`http://localhost:5000/user/${email}`,{
     method:'DELETE',
     headers:{
       authorization:`Bearer ${localStorage.getItem('accesstoken')} `
   }


    }) .then(res=>res.json(email))
   .then(data =>{
     if(data.deletedCount){
         toast.success(`Tumi Valo na MR/MS ${name}`)
         setDoctorsmodal(null)
         refetch()
     }
 })
    
    return (
        <div>
        
        
       
        <input type="checkbox" id="DELETE_MODAL" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-red-700 text-lg">Are yoy sure you want to delete ${name}</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <button onClick={()=> handaleuserdelete()} class="btn btn-secondary btn-xs">delete</button>
              <label for="DELETE_MODAL" class="btn btn-xs">Cencel</label>
            </div>
          </div>
        </div>
       </div>
    );
};

export default Deleteuser;