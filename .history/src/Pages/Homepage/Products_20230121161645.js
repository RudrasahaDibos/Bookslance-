import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import UseCart from "../../Hooks/UseCart";
import { addToDb } from "../../Utilits/Fakedb";
import Cartt from "../Addtocart/Cartt";
import OrderSummary from "../Addtocart/OrderSummary";
import Product from "../Homepage/Product";
import Productpage from "./Productpage";

const Products = () => {
  const [Products, Setproduct] = useState([]);
  const [Cart, SetCart] = UseCart();
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);
  const [size, setpagesize] = useState(10);
  const[view ,setview]=useState(null)
  const [ loading] = useAuthState(auth);
 
  
  useEffect(() => {
    fetch(`http://localhost:5000/bookproduct?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        Setproduct(data);
        console.log(data);
      });
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/bookproductCount").then((res) =>
      res.json().then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setpageCount(pages);
      })
    );
  }, []);

  const handleAddtoCart = (Seletedproduct) => {
    let newCart = [];
    const exists = Cart.find((product) => product._id === Seletedproduct._id);
    if (!exists) {
      Seletedproduct.quantity = 1;
      newCart = [...Cart, Seletedproduct];
    } else {
      const rest = Cart.filter((product) => product._id !== Seletedproduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    SetCart(newCart);
    addToDb(Seletedproduct._id);
  };

 
  return (
    <div className="flex display">
      <div className=" ">
        <div className="justify-center   ml-10  mr-32 mt-10  grid lg:grid-cols-4 lg:gap-10 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-1">
          {Products?.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddtoCart={handleAddtoCart}
              setview={setview}
            ></Product>
          ))}
          {
            view && <Productpage view={view} ></Productpage>
          }
        </div>

        <div>
          <div className="btn-group ml-96 mt-5 mb-10">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={page === number ? "btn btn-active" : "btn "}
                onClick={() => setpage(number)}
              >
                {number + 1}
              </button>
            ))}

            {
              <select
                className="btn btn-success ml-2"
                onChange={(event) => setpagesize(event.target.value)}
              >
                <option value="5">5</option>
                <option value="10" selected>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            }
          </div>
        </div>
      </div>

      <div class="indicator mt-24 mr-10 ">
        <Cartt SetCar={SetCart} Cart={Cart}></Cartt>
        <OrderSummary SetCart  ></OrderSummary>
      </div>
    </div>
  );
};

export default Products;
