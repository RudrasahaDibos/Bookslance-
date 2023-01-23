import { useEffect } from "react"
import { useState } from "react"
import Loading from "../Pages/Shared/Loading";

const UseProduct=()=>{
   const [Products , Setproduct] = useState([])

   
   const {
      data: Products,
      isLoading,
      refetch,
    } = useQuery(Products, () =>
      fetch(`http://localhost:5000/bookproduct`).then((res) =>
        res.json()
      )
    );



 if(isLoading){
   return<Loading></Loading>
 }


   //  useEffect(()=>{
   //      fetch('http://localhost:5000/bookproduct')
   //      .then(res=>res.json())
   //      .then(data=>Setproduct (data))
    
   //    },[])

  

   return[Products , Setproduct,refetch]


}
export default UseProduct;
