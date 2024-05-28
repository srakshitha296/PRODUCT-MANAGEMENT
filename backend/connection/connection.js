const env = require('dotenv').config()

const MONGO_URI = env.parsed.MONGO_URI
const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log('-:DataBase Connection Successfull:-');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB