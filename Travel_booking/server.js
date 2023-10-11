const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Travel booking App");
})

app.listen(3000,()=>console.log("Server is listening to Port 3000"));
