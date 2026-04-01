const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Ab yeh .env file ya Vercel se tumhara Atlas link uthayega
    const uri = process.env.MONGO_URI; 
    
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(uri);
    console.log("MongoDB Cloud (Atlas) connected successfully!");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;