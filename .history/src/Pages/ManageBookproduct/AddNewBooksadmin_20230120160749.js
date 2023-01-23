
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

import DoctorsModaldelte from './DoctorsModaldelte';
import ManageDoctor from './ManageDoctor';


const AddNewBooksadmin = () => {
  const [Doctorsmodaldelete , setDoctorsmodal] = useState(null)

const {data: doctors,isLoading,refetch} = useQuery('doctors',()=> fetch('http://localhost:5000/doctor',{
    headers:{
        authorization:`Bearer ${localStorage.getItem('accesstoken')} `
    }
})
.then(res=>res.json())


)
if(isLoading){
    return<Loading></Loading>
}


    return (
        <div>
            <h1 className="text-xl">Manage Doctor</h1>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    
    <thead>
      <tr>
       
        <th>S.NO</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>DELETE</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        doctors.map((doctor,index) =><ManageDoctor
        key={doctor._id}
        doctor={doctor}
        index={index}
        refetch={refetch}
        setDoctorsmodal={setDoctorsmodal}
        ></ManageDoctor>)
     }
     
       
 
  </tbody>
  </table>
</div>
{/* {
 Doctorsmodaldelete  && <DoctorsModaldelte
 Doctorsmodaldelete ={ Doctorsmodaldelete }
 refetch={refetch} 
 setDoctorsmodal={setDoctorsmodal}
  ></DoctorsModaldelte>
} */}
</div>
      
    );
};

export default AddNewBooksadmin;