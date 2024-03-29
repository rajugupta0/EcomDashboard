import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";



const Nav = () => {

  const [products] = useContext(ProductContext);
  

  let uniqueCategory = products && products.reduce((acc,cv) => [...acc,cv.category], [])

  uniqueCategory =  [...new Set(uniqueCategory)];
  console.log(uniqueCategory);



  return (  
    <nav  className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a href='/create'
      className='py-2 px-5 border rounded border-blue-200 text-blue-300 '  
    >
    Add New Product
    </a>
    <hr className='w-[80%] my-3 '></hr>
    <h1 className='text-2xl w-[80%] mb-3' >Category</h1>

      <div className='w-[80%]'>

      {uniqueCategory.map((c, i) => (
        <Link
          key={i}
          to={`/?category=${c}`}
          className="flex items-center mb-3"
        >
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-200"></span>{" "}
          {c}
        </Link>
      ))}

       
      </div>

    </nav>

    
  );
};

export default Nav