import React from 'react';
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user-info');
        if(auth){
            navigate('/')
        }
    },[])

    const handleLogin= async()=>{
        console.log(email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem('user-info',JSON.stringify(result));
            alert("login successful");
            navigate('/');
        }else{
            alert("Invalid User");
        }
    }
    return(
        <div className='login'>
            <input className='inp-box' type="text"  value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input  className='inp-box'  type="password" value={password}  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin} type="button">Login</button>
        </div>
    )
}

export default Login;