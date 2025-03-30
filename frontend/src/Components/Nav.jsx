import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user-info');
    const navigate=useNavigate();
     const logout =()=>{
        console.log("apple")
        localStorage.clear();
        navigate('/signup');
     }
  
    return(
        <div>
            <img className='logo' alt='logo' src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg'/>
            {auth? <ul className='nav-ul'>
                <li ><Link to="/" >Home Page</Link></li>
                <li ><Link to="/add" >Add Products</Link></li>
                <li ><Link to="/update" >Update products</Link></li>
           
                <li ><Link to="/profile" >Profile</Link></li>
                <li><Link to="/signup" onClick={logout} >Logout({JSON.parse(auth).name})</Link></li>
           
                
                </ul>:<ul className='nav-ul nav-right'>
                   <li><Link to="/signup">Signup</Link></li> 
                    <li ><Link to="/login" >Login</Link></li>
                </ul>
                
        
            }
        </div>
    )
}

export default Nav