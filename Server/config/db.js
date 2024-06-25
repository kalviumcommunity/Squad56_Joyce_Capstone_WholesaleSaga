const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.mongoURI;

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectToDB;
// I am raising a pr for my "Database read and write performed" which is a redo assingment as I got a review that "The PR does NOT fully meet the purpose as it only partially implements the required database call in the API route."