import { useEffect } from "react"
import { useState } from "react"

const UseProduct=()=>{
   const [Products , SetProduct] = useState([])

   
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>Setproduct (data))
    
      },[])

  

   return[Products , SetProduct]


}
export default UseProduct;
