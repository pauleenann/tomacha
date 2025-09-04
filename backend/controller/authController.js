import User from "../model/User.js";
import { clearRefreshTokenCookie, setRefreshTokenCookie } from "../utils/cookie.js";
import { generateAccessToken, generateRefreshToken, tokenDecoder, verifyRefreshToken } from "../utils/jwt.js";

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
                signInMethod: 'email & password'
            })
        }

        // generate access token and refresh token
        const accessToken = generateAccessToken({
            userId: userExists._id,
            role: userExists.role
        })
        const refreshToken = generateRefreshToken({
            userId: userExists._id
        })

        console.log(refreshToken)
        // store refresh token to cookie
        setRefreshTokenCookie(res, refreshToken)

        //send response
        return res.status(200).json({
            token: accessToken,
            user: userExists,
            message: 'Signed in with google '
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Cannot sign in with Google'
        })
    }
}

export const signIn = async (req, res)=>{
    try {
        console.log('signin',req.user);

        // get user from decoded token 
        const user = req.user;
        
        // throw an error if user is empty
        if(!user) {
            return res.status(400).json({
                message: 'User is empty'
            })
        }

        // destructure needed data 
        const { email } = user;

        // check first if user exists in the database, if does not exist, create user
        let userExists = await User.findOne({email: email});

        if(!userExists){
            return res.status(400).json({
                message: 'User does not exist. Please sign up first.'
            })
        }

        // generate access token and refresh token
        const accessToken = generateAccessToken({
            userId: userExists._id,
            role: userExists.role
        })
        const refreshToken = generateRefreshToken({
            userId: userExists._id
        })

        // store refresh token to cookie
        setRefreshTokenCookie(res, refreshToken)

        //send response
        return res.status(200).json({
            token: accessToken,
            user: userExists,
            message: 'Signed in with google '
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Cannot sign in'
        })
    }
}

export const signUp = async (req, res)=>{
    try {
        const {firstName, lastName, email, username} = req.body;

        // check first if user exists in the database, if does not exist, create user
        let userExists = await User.findOne({email: email});

        // create user
        if(!userExists){
            userExists = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
            })
        }

        // generate access token and refresh token
        const accessToken = generateAccessToken({
            userId: userExists._id,
            role: userExists.role
        })
        const refreshToken = generateRefreshToken({
            userId: userExists._id
        })

        console.log(refreshToken)
        // store refresh token to cookie
        setRefreshTokenCookie(res, refreshToken)

        //send response
        return res.status(200).json({
            token: accessToken,
            user: userExists,
            message: 'Signed in with google '
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }
}

export const signOut = async (req, res)=>{
    try {
        clearRefreshTokenCookie(res);
        
        return res.status(200).json({message: 'Signed out successfully'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }
}

export const refreshAccessToken = async (req, res)=>{
    try {
        const {refreshToken} = req.cookies;
        console.log('refresh token: ', refreshToken)
        if(!refreshToken){
            return res.status(400).json({
                message: 'Refresh token expired:('
            })
        }

        // verify refresh token first
        const isVerified = verifyRefreshToken(refreshToken);
        
        if(!isVerified){
            return res.status(400).json({
                message:'Refresh token expired' 
            })
        }

        // decode refresh token to get user Idg
        const {userId} = tokenDecoder(refreshToken);

        // get user details
        const user = await User.findById(userId);
        
        // generate new accesstoken
        const accessToken = generateAccessToken({
            userId: user._id,
            role: user.role
        })
        
        //send response
        return res.status(200).json({
            token: accessToken,
            user: user,
            message: 'Signed in with google '
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Cannot refresh '
        })
    }
}