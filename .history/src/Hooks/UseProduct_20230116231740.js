import { useEffect } from "react"
import { useState } from "react"

const UseProduct=()=>{
   const [Products , Setproduct] = useState([])

   
   //  useEffect(()=>{
   //      fetch('http://localhost:5000/bookproduct')
   //      .then(res=>res.json())
   //      .then(data=>Setproduct (data))
    
   //    },[])

  

   return[Products , Setproduct]


}
export default UseProduct;
