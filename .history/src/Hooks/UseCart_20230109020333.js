import { useEffect, useState } from "react"
import { getStoredCart } from "../Utilits/Fakedb"


const UseCart =(Pro)=>{
    const [Cart,SetCart] = useState([])
    useEffect(()=>{
        const storeCart = getStoredCart()
        const savedCart =[]
        for(const id in storeCart){
          const addProduct = Products.find(Product=> Product._id === id)
          
          if(addProduct){
            const quantity = storeCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct)
          }
        }
        SetCart(savedCart)
      },[Products])
      return[Cart,SetCart]
}
export default UseCart;