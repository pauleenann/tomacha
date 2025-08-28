import User from "../model/User.js";
import { setRefreshTokenCookie } from "../utils/cookie.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

// sign in with google
export const signInWithGoogle = async (req, res)=>{
    try {
        console.log('You are signing with google');

        // get user from decoded token 
        const user = req.user;
        
        // throw an error if user is empty
        if(!user) {
            return res.status(400).json({
                message: 'User is empty'
            })
        }

        // destructure needed data 
        const { name, email } = user;
        console.log(name)
        
        // check first if user exists in the database, if does not exist, create user
        let userExists = await User.findOne({email: email});

        // create user
        if(!userExists){
            userExists = await User.create({
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                email: email,
            })
        }

        // generate access token and refresh token
        const accessToken = generateAccessToken({
            userId: userExists._id,
            role: userExists.role
        })
        const refreshToken = generateRefreshToken({
            userId: userExists._id,
            role: userExists.role
        })

        // store refresh token to cookie
        setRefreshTokenCookie(res, refreshToken)

        //send response
        return res.status(200).json({
            token: accessToken,
            user: userExists,
            message: 'Signed in with google '
        })

        console.log(userExists)

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Cannot sign in with Google'
        })
    }
}