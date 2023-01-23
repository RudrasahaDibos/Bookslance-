import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Pages/Shared/Loading";

const UseProduct = () => {
  const [Products, Setproduct] = useState([]);

  useEffect(() => {
    fetch("pro")
      .then((res) => res.json())
      .then((data) => Setproduct(data));
  }, []);

  return [Products, Setproduct];
};
export default UseProduct;
