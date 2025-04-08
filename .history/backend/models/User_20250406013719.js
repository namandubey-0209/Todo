import mongoose from 'mongoose';
import bcrypt from 'bcrypt.js';

const UserSchema = new mongoose.Schema({
    username : {
        type : String
    }
});