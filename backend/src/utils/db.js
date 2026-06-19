import mongoose from "mongoose";

export const connectDB = async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Failed to connect mongodb", error);
    }
}

