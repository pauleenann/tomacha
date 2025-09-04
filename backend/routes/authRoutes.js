import express from 'express';
import { refreshAccessToken, signInWithGoogle, signOut, signUp } from '../controller/authController.js';
import { authenticateFirebase } from '../middleware/authenticateFirebase.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post(
    '/signin-google',
    authenticateFirebase,
    signInWithGoogle
);
router.get(
    '/refresh',
    refreshAccessToken
);
router.post(
    '/signout',
    authenticate,
    signOut
);
router.post(
    '/signup',
    authenticateFirebase,
    signUp
)

export default router;