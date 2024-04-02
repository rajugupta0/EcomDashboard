import { useState } from "react"



const Create = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

  return (
    <>
    <form className="flex flex-col items-center content-center p-[5%] w-screen h-screen">
    <h1 className="text-3xl p-2">Add New Product</h1>

    <input 
        type="url" placeholder="Image Link"  
        className="text-1.5xl bg-zinc-100 rounded w-1/2 p-3 h-2.5 mb-2"  
        onChange ={(e) =>  {setImage(e.target.value)}}
        value={image}    
    />
    
    <input 
        type="text" placeholder="Title"  
        className="text-1.5xl bg-zinc-100 rounded w-1/2 p-3 h-2.5  mb-2"  
        onChange ={(e) =>  {setTitle(e.target.value)}}
        value={title}    
    />
    <div className="w-1/2 flex justify-between">
        <input 
         type="test" placeholder="Categoty"  
             className="text-1.5xl bg-zinc-100 rounded w-1/1.8  p-3 h-2.5 mb-2"  
           onChange ={(e) =>  {setCategory(e.target.value)}}
            value={category}    
        />
    
    <input 
        type="number" placeholder="Price"  
        className="text-1.5xl bg-zinc-100 rounded w-1/1.8 p-3 h-2.5  mb-2"  
        onChange ={(e) =>  {setPrice(e.target.value)}}
        value={title}   
         
    /> 
    </div>
    <textarea  
        name="" id=""  
        className="text-1.5xl mt-2 bg-zinc-100 rounded w-1/2  h-10 mb-2"  
        rows="10" 
        placeholder="enter description here..."
        onChange ={(e) =>  {setDescription(e.target.value)}}
            value={description} 
        
        ></textarea>
    </form>
    </>
  )
}

export default Create