const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME ||'SmartTracker';
const DB_HOST = process.env.DB_HOST ||'mongodb';
const DB_PORT = process.env.DB_PORT ||'27017';


const DB_URI = `${DB_HOST}://`+
            `${process.env.DB_USER}:${process.env.DB_PASSWORD}`+
            `@${process.env.DB_IP}:${DB_PORT}/${DB_NAME}`
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(DB_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error){
        console.log(DB_URI); 
        console.log(error);
    }
}

module.exports = connectDB;
