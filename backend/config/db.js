const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const db = process.env.MONGO_URL;
const connectDB = async () => {
    await mongoose.connect(db);
    console.log("database is connected");
};

module.exports = { connectDB };