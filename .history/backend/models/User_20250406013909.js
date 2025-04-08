import mongoose from 'mongoose';
import bcrypt from 'bcrypt.js';

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    password: { 
        type: String, 
        required: true },
    createdAt: { type: Date, default: Date.now }
});