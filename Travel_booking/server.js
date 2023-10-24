import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

// const userRoutes=require("./Routes/userRoutes.js")
import userRoutes from './Routes/userRoutes.js';


const app=express();

dotenv.config();
connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/api/v1/user",userRoutes);

app.get("/",(req,res)=>{
    res.send("Hello Travel booking App");
})

app.listen(3000,()=>console.log("Server is listening to Port 3000"));


// password --- X5MKNqSD3Mtberqu

// MongoDb Uri--- mongodb+srv://Arif99:X5MKNqSD3Mtberqu@cluster0.dzxwm0u.mongodb.net/?retryWrites=true&w=majority