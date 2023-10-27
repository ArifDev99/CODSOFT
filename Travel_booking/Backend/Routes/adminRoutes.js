import express from 'express';
import { adminSignup,adminLogin } from '../controllers/adminControllers.js';

const router=express.Router();

router.post("/signup",adminSignup)
router.post("/login",adminLogin);

const adminRoutes=router;
export default adminRoutes;