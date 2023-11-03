import Tour from "../Models/tourModel.js";
import tourRoutes from "../Routes/tourRoutes.js";
import { validfirstName } from "../utils/validator.js";

const createTour=async (req,res)=>{
    try {

        // return res.status(201).json({massage:"Tour Created Successfully"})
        
        const {name,locations,description,costPrice,images,tourDays}=req.body;
    
        if(!name || !description || !tourDays ){
            return res.status(400).json({massage:"Missing Required Fields"})
        }

        // if(!validfirstName(name)){
        //     return res.status(400).json({massage:"Invalid Name"})
        // }

        if(isNaN(costPrice)){
            return res.status(400).json({massage:"Invalid Cost Price"})
        }
        if(isNaN(tourDays)){
            return res.status(400).json({massage:"Invalid Days"})
        }

        const data={
            name,
            locations,
            description,
            costPrice,
            tourDays,
            images
        }

        const createTour=await Tour.create(data)

        return res.status(201).json(
            {massage:"Successfully Created",
            createTour
            }
        )

    } catch (error) {
        return res.status(500).send(error);
    }
}


const getAllTour=async(req,res)=>{
    try {
        const allTour=await Tour.find({});
        if (!allTour){
            res.status(400).json({massage:"Tour not found"})
        }
        res.status(201).json({allTour})
    } catch (error) {
        res.status(500).send(error);
    } 
}

const getTour= async(req,res)=>{
    try {
        const tourid=req.params.id
        console.log(tourid);
        const tour=await Tour.findOne({_id:tourid}).exec();
        if(!tour){
            return res.status(400).json({massage:"Some Thing Went Worng"})
        }
        return res.status(201).json({
            massage:"Successful",
            tour
        })
        // console.log(tour);
    } catch (error) {
        return res.status(500).send(error)
    }
}


export {getAllTour,createTour,getTour};