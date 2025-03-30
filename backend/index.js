const express= require ('express');
const cors = require('cors');
require('./db/config');
const User=require('./db/User');//same
const Product=require('./db/Product');

const app=express();

//middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.post("/signup",async(req,resp)=>{
    let user=new User(req.body);//same User variable to store the data
    let result= await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result)
})


app.post("/login",async(req,resp)=>{
    console.log(req.body);
    if(req.body.email&&req.body.password){
        let user= await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user);
    }else{
        resp.send({result:"No user found"});
    }
    }else{
        resp.send({result:"No user found"});
    }
    
    //resp.send(user);
})

app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
})

app.get("/products",async(req,resp)=>{
    let products=await Product.find();
    if( products.length>0){
        resp.send(products);
    }else{
         resp.send({result:"No product found"});
    }
})


app.delete("/product/:id",async(req,resp)=>{
    resp.send(req.params.id);
    const result=await Product.deleteOne({_id:req.params.id})
})


app.get("/product/:id",async(req,resp)=>{
    let result=await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }else{
        resp.send({result:"No record Found!!!"})
    }
})

app.listen(5000);