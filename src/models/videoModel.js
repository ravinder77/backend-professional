import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videofile: {
        type: String, // URL of the video file from cloudinary
        required: true,
    },
    thumbnail: {
        type: String, // URL of the image from cloudinary
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    description: {
        type: String,
        required: true,
    },

    duration: {
        type: Number,  //  from the video file in cloudinary url
        required: true,
    },

    views: {
        type: Number,
        default: 0
    },

    likes: {
        type: Number,
        default: 0
    },

    dislikes: {
        type: Number,
        default: 0
    },

    isPublished: {
        type: Boolean,
        default: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

}, {
    timestamps: true
});

videoSchema.plugin(mongooseAggregatePaginate);




export const Video = mongoose.model("Video", videoSchema);