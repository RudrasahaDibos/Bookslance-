import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loading from "./Loading";
import UseProduct from "../../Hooks/UseProduct";
import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
  // const [keyword, setKeyword] = useState("");
  const [user, loading] = useAuthState(auth);
  const[admin]=useAdmin()
  // const [Products] = UseProduct();

  // const searchedProducts = Products?.filter(product => product.name.includes(keyword))

  // console.log(Products);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accesstoken')
  };

  if (loading) {
    return <Loading></Loading>;
  }
  const Menubar = (
    <>
      {/* <div class="flex-none gap-2  sm:w-10 sm:mr-24  lg:w-20  lg:mr-60 relative ">
        <div class="form-control flex-row">
          <input
            id="search-field"
            type="text"
            placeholder="Search"
            class="input input-bordered"
            onChange={(event) => setKeyword(event.target.value)}
          />
         
        </div>
        <p className="absolute top-full left-0 w-56 bg-white z-40 h-40 overflow-y-scroll">
          {
            searchedProducts?.map(product => <p key={product?._id} className="whitespace-nowrap">{product?.name}</p>)
          }
        </p>
      </div> */}
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/"}>Product</Link>
      </li>
      <li>
        <Link to={"/reviews"}>Reviews</Link>
      </li>
      <li>
        <Link to={"/addtocart"}>AddToCart</Link>
      </li>
     
      {user && (
        <li>
          <Link to={"/dashboard"}>DashBoard</Link>
         
        </li>
      )}
      <li>
    <li>
      {
       user &&  <Link to={"/addbook"}>Add A New Book</Link>
      }
    </li>


        {user ? (
          <button onClick={logout} class="btn btn-ghost">
            {user?.displayName}(signOut)
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-100  ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Menubar}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case  text-xl">Bookslance</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal   p-0">{Menubar}</ul>
      </div>

      <div className="navbar-end">
        <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
