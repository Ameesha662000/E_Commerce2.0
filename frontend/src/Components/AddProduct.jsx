import React from 'react'
import {useState} from 'react'
const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setprice]=useState("");
    const [company,setCompany]=useState("");
    const [category,setCategory]=useState("");
    const [error,setError]=useState(false);
    
    const collectdata=async()=>{



        if(!name||!price||!company||!category){
            setError(true);
            return false;
        }
         

        console.log(name,price,company,category);
        const userId=JSON.parse(localStorage.getItem('user-info'))._id;
       // console.log(userId._id); //fetches the user id from the local storage
       let result= await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            "Content-Type":'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
             
        }
       });
       result= await result.json();
       console.log(result);
       alert("Product Added Successfully");


    }
    return(
        <div className='addproduct'>
            <h1>Add Product</h1>
            <input className='inp-box' value={name} type="text" placeholder='Enter product Name' onChange={(e)=>setName(e.target.value)}/>
            {error&&!name &&<span className='invalid-inp'>Enter valid name</span>}

            <input className='inp-box' value={price} type="text" placeholder='Enter product Price' onChange={(e)=>setprice(e.target.value)}/>
            {error&&!price &&<span className='invalid-inp'>Enter valid price</span>}

            <input  className='inp-box' value={company} type="text" placeholder='Enter product Company Name' onChange={(e)=>setCompany(e.target.value)}/>
            {error&&!company &&<span className='invalid-inp'>Enter valid Company name</span>}

            <input className='inp-box' type="text" value={category} placeholder='Enter product Category' onChange={(e)=>setCategory(e.target.value)}/>
            {error&&!category &&<span className='invalid-inp'>Enter valid Category name</span>}
            
            <button type="button" onClick={collectdata}>Add Product</button>
        </div>
    )
}
export default AddProduct;