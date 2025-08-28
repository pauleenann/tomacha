import express from 'express';
import { signInWithGoogle } from '../controller/authController.js';
import { authenticateFirebase } from '../middleware/authenticateFirebase.js';

const router = express.Router();

router.post(
    '/signin-google',
    authenticateFirebase,
    signInWithGoogle
)
;
export default router;