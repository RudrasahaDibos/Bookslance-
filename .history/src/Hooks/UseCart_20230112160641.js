import { useEffect, useState } from "react"
import { getStoredCart } from "../Utilits/Fakedb"


const UseCart =()=>{
    const [Cart,SetCart] = useState([])
    useEffect(()=>{
        const storeCart = getStoredCart()
        const savedCart =[]
        const keys = Object.keys(storeCart)
        console.log(keys)

        fetch('')
        .then(res =>res.json())
        .then(data =>{



        })
        
      },[])
      return [Cart,SetCart];
}
export default UseCart;