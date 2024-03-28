import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useContext } from "react"
import { ProductContext } from "../utils/Context"
import Loading from "./Loading"

const Home = () => {

  const [ products ] =  useContext(ProductContext);
  


  return products ?(
    <>
    <Nav />
    <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap  overflow-x-hidden overflow-y-auto'>
      
    {products.map((p) => (
      <Link 
        to={`/details/${p.id}`}
        className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[32vh] flex flex-col justify-center items-center'
        key={p.id} 
      >
        <div 
          className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
          style={{
            backgroundImage: `url(${p.image})`
          }}
        >
        </div>
        <h3 className='hover:text-blue-300 '>{p.title}</h3> 
      </Link>
    ))}
    

    

      </div>
      </>
  ): <Loading />
}

export default Home