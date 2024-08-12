import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    avatar: {
        type: String,   // URL of the image from cloudinary
        required: true,
    },

    coverImage: {
        type: String,   // URL of the image from cloudinary
      
    },

    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"

    }],

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,

    },

    refreshToken: {
        type: String,
    },

}
    , {
        timestamps: true

    });





    
export const User = mongoose.model("User", userSchema); 