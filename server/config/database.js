const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            console.warn("MONGODB_URL is not configured. Skipping DB connection in development/testing.");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL, {});
        console.log("DB connection successful");
    } catch (error) {
        console.log("DB connection failed:", error.message);
        // Avoid exiting during development/testing; log and continue
    }
};