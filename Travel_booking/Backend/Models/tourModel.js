import mongoose from "mongoose";

const tourSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        locations:[
            {
                type:String,
            }
        ],
        description:{
            type:String,
            required:true
        },
        costPrice:{
            type:Number,
            default:0,
        },
        tourDays:{
            type:Number,
            required:true
        },
        images:{
            type:[{
                type:String,
                default:"https://images.unsplash.com/photo-1627894485200-b92fb4353967?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }]

        }
    },
    {
        timestamps:true,
    })

const Tour= mongoose.model("Tour",tourSchema)

export default Tour;