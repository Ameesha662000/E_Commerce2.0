import { useState } from 'react'
import Nav from './Components/Nav'
import './App.css'
import { BrowserRouter,Routes ,Route, Router} from 'react-router-dom'
import Footer from './Components/Footer'
import SignUP from './Components/SignUP'
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/update/:id" element={<UpdateProduct></UpdateProduct>} />
      <Route path="/logout" element={<h1>Logout  Component</h1>} />
      <Route path="/profile" element={<h1>Profile Component</h1>} />
      </Route>
      
      <Route path="/signup" element={<SignUP></SignUP>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    
    </BrowserRouter>
    <Footer></Footer>
    
      
        
    </>
  )
}

export default App
