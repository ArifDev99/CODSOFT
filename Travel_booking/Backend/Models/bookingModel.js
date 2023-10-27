import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema(
    {
        tourBookedDate:{
            type:Date,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        tour:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tour"
        },
        totalmember:{
            type:Number,
            default:1,
            required:true,
        },
        ispaid:{
            type:Boolean,
            default:false,
            required:true
        },
        totalCost:{
            type:Number,
            default:0,
            required:true
        }

    },
    {
        timestamps:true
    });


const Booking=mongoose.model("Booking",bookingSchema);
export default Booking;