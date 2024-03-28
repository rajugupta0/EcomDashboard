import { Link } from "react-router-dom"
import { ProductContext } from "../utils/Context"
import { useContext } from "react";


const Details = () => {

  const [ products ] =  useContext(ProductContext);

  return (
    <div className=" w-[70%] h-full  m-auto p-[5%] flex items-center justify-center" >
        
        <div className="w-[100%] m-5" >
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""></img>
        </div>
       
        <div className="content">
             <h1 className='text-4xl w-[80%] mb-3' >Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
             <h2 className="text-2xl ">$ 109.90</h2>
             <p className="mb-[5%]">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday </p>
             <Link 
             className='py-2 px-5 mr-3 border rounded border-blue-200 text-blue-300 ' >
             Edit</Link>
             <Link
             className='py-2 px-5 m-3 border rounded border-red-200 text-red-300 ' >
             Delete</Link>

        </div>
        
    
    </div>
  )
}

export default Details