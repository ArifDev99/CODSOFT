import mongoose from "mongoose";


const userModel=mongoose.Schema(
    {
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        phone_no:{type:Number,required:true}

    },
    {
        timestamps:true
    });



const User=mongoose.model("User",userModel);
export default User;