import jwt from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";

export const generateAccessToken = (payload) =>{
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_ACCESS_EXPIRE})
}

export const generateRefreshToken = (payload)=>{
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRE})
}

export const verifyAccessToken = (token)=>{
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
}

export const verifyRefreshToken = (token)=>{
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
}

export const tokenDecoder = (token)=>{
    return jwtDecode(token)
}