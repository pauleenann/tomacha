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
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    signInMethod: {
        type: String,
        enum: ['google', 'email & password'], //ito lang ung allowed 
        default: 'google'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSchema)
export default User;