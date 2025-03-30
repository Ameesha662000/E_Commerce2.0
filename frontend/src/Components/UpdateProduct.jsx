import React, { useEffect } from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'

const UpdateProduct=()=>{
    const [name,setName]=useState("");
    const [price,setprice]=useState("");
    const [company,setCompany]=useState("");
    const [category,setCategory]=useState("");
    const params=useParams();

    useEffect(()=>{
         console.log(params);
         getProductDetails();

    },[])

    const getProductDetails=async()=>{
        console.log(params);
        let result=await fetch(`http://localhost:5000/product/${params.id}`)
        result=await result.json();
        //console.log(result);
        setName(result.name);
        setprice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
 
    
  const updateProduct =async()=>{
    console.log(name,price,category,company);
  }
    return(
        <div className='addproduct'>
            <h1>Update Product</h1>
            <input className='inp-box' value={name} type="text" placeholder='Enter product Name' onChange={(e)=>setName(e.target.value)}/>
           
            <input className='inp-box' value={price} type="text" placeholder='Enter product Price' onChange={(e)=>setprice(e.target.value)}/>
          

            <input  className='inp-box' value={company} type="text" placeholder='Enter product Company Name' onChange={(e)=>setCompany(e.target.value)}/>
           

            <input className='inp-box' type="text" value={category} placeholder='Enter product Category' onChange={(e)=>setCategory(e.target.value)}/>
           
            
            <button type="button" onClick={updateProduct}>Update Product</button>
        </div>
    )
}
export default UpdateProduct;