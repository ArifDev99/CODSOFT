import express from 'express';

// import { registerUser } from '../controllers/userController.js';

import { registerUser, loginUser,allUser } from '../controllers/userController.js';

const router=express.Router();

router.post('/signup',registerUser);
router.post('/login',loginUser);
router.get('/',allUser);

const userRoutes=router;

export default userRoutes;