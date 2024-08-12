import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});
import mongoose from "mongoose";



const connectDB = async () => { 
    try {
     const connectionInstancce = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB connection successful: ${connectionInstancce.connection.host}`);
        
    } catch (error) { 
        console.error("Error connecting to MongoDB !!", error);
        process.exit(1);
    }
        
}
    

// Connect to MongoDB

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
        })
    })
    .catch((err) => {
        
    console.log("MongoDB connection failed ", err);
})


