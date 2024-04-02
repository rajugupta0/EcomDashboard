import { useState } from "react"



const Create = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

  return (
    <>
    <form className="flex flex-col items-center content-center p-[5%] w-screen h-screen">
    <h1 className="text-3xl p-2">Add New Product</h1>

    <input 
        type="url" placeholder="Image Link"  
        className="text-1.5xl bg-zinc-100 rounded w-1/3 p-3 h-2.5 mb-2"  
        onChange ={(e) =>  {setImage(e.target.value)}}
        value={image}    
    />
    
    <input 
        type="text" placeholder="Title"  
        className="text-1.5xl bg-zinc-100 rounded w-1/3 p-3 h-2.5  mb-2"  
        onChange ={(e) =>  {setTitle(e.target.value)}}
        value={title}    
    />
    </form>
    </>
  )
}

export default Create