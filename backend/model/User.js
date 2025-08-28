import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: String,
    image: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    signInMethod: {
        type: String,
        enum: ['google', 'email & password', 'apple',  'facebook'], //ito lang ung allowed 
        default: 'google'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSchema)
export default User;