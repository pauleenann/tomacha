import { verifyAccessToken } from "../utils/jwt.js";

export const authenticate = async (req, res, next)=>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(400).json({
                message: 'Authorization header empty'
            })
        }

        const token = authHeader.substring(7);

        // verify token
        const isVerified = verifyAccessToken(token);

        if(!isVerified){
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }
}