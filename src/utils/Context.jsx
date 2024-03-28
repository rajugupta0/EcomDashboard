import axios from "./axios"
import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()   

const Context = (props) => {
    const [products, setproducts] = useState(null)

    const getproducts = async () => {
        const { data } = await axios("/products")
        setproducts(data)   
    }
     
    useEffect(() => {
        getproducts();
    },[])

  return (
    <ProductContext.Provider value ={[products, setproducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}
 
export default Context