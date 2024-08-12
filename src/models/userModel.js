import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name

});

export const User = mongoose.model("User", userSchema); 