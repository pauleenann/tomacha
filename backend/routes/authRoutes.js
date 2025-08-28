import express from 'express';
import { refreshAccessToken, signInWithGoogle } from '../controller/authController.js';
import { authenticateFirebase } from '../middleware/authenticateFirebase.js';

const router = express.Router();

router.post(
    '/signin-google',
    authenticateFirebase,
    signInWithGoogle
);
router.get(
    '/refresh',
    refreshAccessToken
)

export default router;