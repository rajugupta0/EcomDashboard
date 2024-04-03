import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search }  = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  
  
  

  const [FilterProducts, setFilterProducts] = useState(null);


const getProductsCategory = async () => {
  try {
    const {data} = await axios.get(`/products/category/${category}`);
    setFilterProducts(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


useEffect(() => {
  if (!FilterProducts || category == "undefined") {
    setFilterProducts(products)
  }
  if (category != "undefined") {
    getProductsCategory();
  } 
}, [category, products]);







  return (
    <>
    <Nav />
    {products ? (
      <div className="h-full w-full p-3 sm:p-10 pt-[5%] flex flex-wrap justify-center">
        {FilterProducts && FilterProducts.map((product) => (
          <Link
            to={`/details/${product.id}`}
            className="mr-3 mb-3 card p-3 border shadow rounded w-[90%] sm:w-[45%] lg:w-[30%] h-[50vh] flex flex-col justify-center items-center"
            key={product.id}
          >
            <div
              className="hover:scale-110 w-full h-[60%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.image})`
              }}
            ></div>
            <h3 className="hover:text-blue-300">{product.title}</h3>
          </Link>
        ))}
      </div>
    ) : (
      <Loading />
    )}
  </>
  

  );
};

export default Home;
