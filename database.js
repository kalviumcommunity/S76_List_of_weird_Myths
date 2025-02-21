const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        if (!process.env.DB_URL) {
            throw new Error('Database URL not found in environment variables');
        }
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB connected with server: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;