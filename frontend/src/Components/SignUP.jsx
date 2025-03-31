import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUP=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()

    
    useEffect(()=>{
        const auth=localStorage.getItem('user-info');
        if(auth){
            navigate('/')
        }
    })

    const collectdata=async ()=>{
        console.log(name,email,password)
        let result= await fetch('http://localhost:5000/signup',{ //calls the backend API at /signup
            method:'post', //specifies that this is a post request
            body:JSON.stringify({name,email,password}), //convert the object into JSON string before sending it in the request body
            headers:{
                'Content-Type':'application/json'//always use this header---tells the server that the request body contains JSON data. Without this, the server might not parse the request correctly.
            },
        })
        result=await result.json() //Converts the response from the server into a JavaScript object.
        console.log(result);
           localStorage.setItem('user-info',JSON.stringify(result.result))//stores the user data in the local storage
           localStorage.setItem('token',JSON.stringify(result.auth))//stores the user data in the local storage
           alert("User Registered Successfully");
           navigate('/');//redirects to the home page
        
    }
    
    return(
        <div className='signup'>
            <h1>SignUP Page</h1>
            <input className='inp-box' value={name} type='text' onChange ={(e)=>setName(e.target.value) } placeholder='Enter Name'/>
            <input className=' inp-box' value={email} type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Mail'/>
            <input className='inp-box'  value={ password} type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
            <button onClick={collectdata} type='button'>SignUP</button>
            
        </div>
    )
}
export default SignUP;