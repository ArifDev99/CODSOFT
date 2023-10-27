import express from 'express';
import { getAllTour,createTour } from '../controllers/tourController.js';
import authenticate_Checking from '../Middlewares/authCheck.js';

const router=express.Router();

router.get('/',getAllTour)
router.post('/create',authenticate_Checking,createTour)

const tourRoutes=router;
export default tourRoutes;