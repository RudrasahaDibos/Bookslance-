import { useEffect, useState } from "react"
import { getStoredCart } from "../Utilits/Fakedb"


const UseCart =()=>{
    const [Cart,SetCart] = useState([])
    useEffect(()=>{
        const storeCart = getStoredCart()
        const savedCart =[]
        const keys = Object.keys(savedCart)
        console.log(keys)
        // for(const id in storeCart){
        //   const addProduct = Products.find(Product=> Product._id === id)
          
        //   if(addProduct){
        //     const quantity = storeCart[id];
        //     addProduct.quantity = quantity;
        //     savedCart.push(addProduct)
        //   }
        // }
        // SetCart(savedCart)
      },[])
      return [Cart,SetCart];
}
export default UseCart;