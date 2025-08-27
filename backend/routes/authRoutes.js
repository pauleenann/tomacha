import express from 'express';
import { signInWithGoogle } from '../controllers/authController.js';
import { authenticateFirebase } from '../middlewares/authenticateFirebase.js';

const router = express.Router();

router.post(
    '/signin-google',
    authenticateFirebase
    // signInWithGoogle
)
;
export default router;