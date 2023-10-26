import User from "../Models/userModel.js";
import { validfirstName, validlastName, validemail, validpassword, validphone } from "../utils/validator.js";
import bcrypt from 'bcrypt'
// import { sign, decode, verify } from "jsonwebtoken";
import jwt from 'jsonwebtoken'

const registerUser=async (req,res)=>{
    try {
        const {firstname,lastname,email,password,phone_no}=req.body;

        if(!firstname || !lastname || !email || !password || !phone_no){
            return res.status(400).json({message:"Missing required fields"})
        }

        if(!validfirstName(firstname)){
            return res.status(400).json({message:"Invalid Firstname"})
        }
        if(!validlastName(lastname)){
            return res.status(400).json({message:"Invalid Lastname"})
        }
        if(!validemail(email)){
            return res.status(400).json({message:"Invalid Email"})
        }
        if(!validpassword(password)){
            return res.status(400).json({message:"Invalid password"})
        }
        if(!validphone(phone_no)){
            return res.status(400).json({message:"Invalid Phone Number"})
        }

        const isuserExist= await User.findOne({email})
        // console.log(isuserExist); 
        if(isuserExist){
            return res.status(400).json({message:"User Already Exits"})
        }

        const hashedPassword= await bcrypt.hash(password,10)

        const user={firstname,lastname,email,password:hashedPassword,phone_no}
        const createuser=await User.create(user);
        // console.log("Successfully Register");

        const payload = {
            id: createuser._id,
            name: createuser.firstname,
            email: createuser.email,
        };

        const bareartoken=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'1h',
        })
        
        res.status(201).json({ 
            message: 'User successfully registered',
            user:{
                _id:createuser._id,
                firstname:createuser.firstname,
                lastname:createuser.lastname,
                email:createuser.email,
                phone_no:createuser.phone_no
            },
            token:bareartoken
        });
    } catch (error) {
        return res.status(500).send(error)
    }
}

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message:"Missing required fields"})
        }

        if(!validemail(email)){
            return res.status(400).json({message:"Invalid Email"})
        }

        if(!validpassword(password)){
            return res.status(400).json({message:"Invalid Password"})
        }

        const isuserExist=await User.findOne({email})
        if(!isuserExist){
            return res.status(400).json({message:"User Not Found"}) 
        }

        const correctpass=await bcrypt.compare(password,isuserExist.password)

        if(!correctpass){
            return res.status(400).json({message:"Invalid Crendentials"}) 
        }



        const payload = {
            id: isuserExist._id,
            name: isuserExist.firstname,
            email: isuserExist.email,
        };

        const bareartoken=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"1h"
        })
        res.cookie('jwt', bareartoken);

        res.status(201).json({ 
            message: 'User successfully Loged in',
            user:{
                _id:isuserExist._id,
                firstname:isuserExist.firstname,
                lastname:isuserExist.lastname,
                email:isuserExist.email,
                phone_no:isuserExist.phone_no
            },
            token:bareartoken
        });
        
    } catch (error) {
        return res.status(500).send(error)
    }
}


const allUser=()=>{

}
export {registerUser,loginUser,allUser};