//Private Component are used for  the routes that are only accessible to the authenticated users.
import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const PrivateComponent=()=>{
    const auth = localStorage.getItem('user-info')
     return(
        auth? <Outlet/>:<Navigate to="signup "/>
     )
}

export default PrivateComponent;