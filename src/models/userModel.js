import mongoose, { Schema } from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
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
            index: true,
        },

        avatar: {
            type: String, // URL of the image from cloudinary
            required: true,
        },

        coverImage: {
            type: String, // URL of the image from cloudinary
        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 8,
        },

        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// "this" refers to the user instance

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
    return jwt.sign(
        { id: this._id, email: this.email, username: this.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { id: this._id},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    );
};

export const User = mongoose.model("User", userSchema);
