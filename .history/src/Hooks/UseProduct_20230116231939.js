import { useEffect } from "react"
import { useState } from "react"

const UseProduct=()=>{
   const [Products , Setproduct] = useState([])

   
   const {
      data: services,
      isLoading,
      refetch,
    } = useQuery(Products, () =>
      fetch(`http://localhost:5000/bookproduct`).then((res) =>
        res.json()
      )
    );



isLoading


   //  useEffect(()=>{
   //      fetch('http://localhost:5000/bookproduct')
   //      .then(res=>res.json())
   //      .then(data=>Setproduct (data))
    
   //    },[])

  

   return[Products , Setproduct,refetch]


}
export default UseProduct;
