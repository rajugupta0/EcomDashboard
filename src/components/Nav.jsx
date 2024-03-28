
const Nav = () => {
  return (
    
    <nav  className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a href='/create'
      className='py-2 px-5 border rounded border-blue-200 text-blue-300 '  
    >
    Add New Product
    </a>
    <hr className='w-[80%] my-3 '></hr>

    <h1 className='text-2xl w-[80%] mb-3' >Category</h1>

      <ul className='w-[80%]'>
        <li>
          <a href='/'>Cate 1</a>
        </li>
        <li>
          <a href='/about'>Cate 2</a>
        </li>
        <li>
          <a href='/contact'>Cate 3</a>
        </li>
      </ul>

    </nav>

    
  )
}

export default Nav