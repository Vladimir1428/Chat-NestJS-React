import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {type:String, unique: true},
    password: {type:String},
    email: {type: String, unique: true},
    active: {type: Boolean}
})