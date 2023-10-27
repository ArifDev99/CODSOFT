import jwt from 'jsonwebtoken'
import User from '../Models/userModel.js';

const authenticate_Checking=async (req,res,next)=>{
    let token;
    // console.log(req.headers.authorization);
    if(req.headers.authorization){
        try {
            token=req.headers.authorization.split(" ")[1];
            // console.log(token);

            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            // console.log(decoded);
            let email=decoded.email
            // console.log(email);
            let user=await User.findOne({email})
            // console.log(user);
            if(user.isAdmin===false){
                res.status(401).json({massage:"Access Deined ! .You are not Admin"})
                throw new Error("Not Authorized, You not Admin")
            }
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    }

    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token")
    }
}

export default authenticate_Checking