import { auth } from "../config/firebase.js";

export const authenticateFirebase = async (req, res, next)=>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(400).json({
                message: 'Authorization header empty'
            })
        }

        //get token from header ]
        const token = authHeader.substring(7);
        console.log (token)

        // verify and decode token
        const decoded = await auth.verifyIdToken(token)
        console.log(decoded)

        //send decoded to request 
        req.user = decoded

        next()
    } catch (error) {
        return res.status(500).json({error: error})
    }
}