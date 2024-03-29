import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Loading from "./Loading"


const Details = () => {

   const [product , setproduct]= useState(null);

  const {id} = useParams();
  console.log(id);

  const getSingleProduct = async () => {
    try {
      const {data} = await axios.get(`/products/${id}`)
      setproduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getSingleProduct();
  }, []);


  return product ? (
    <div className="w-[70%] h-full m-auto p-[5%] flex items-center justify-center">
      <div className="w-[100%] m-5">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="content">
        <h1 className="text-4xl w-[80%] mb-1">{product.title}</h1>
        <h2 className="text-1xl text-blue-300 mb-3 ">{product.category}</h2>
        <h2 className="text-2xl">${product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link className="py-2 px-5 mr-3 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 m-3 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
  
}

export default Details