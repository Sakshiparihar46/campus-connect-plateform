import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const db = process.env.MONGO_URL;
const connectDB = async () => {
    await mongoose.connect(db);
    console.log("database is connected");
};

export {connectDB};