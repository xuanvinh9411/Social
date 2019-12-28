const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("connect mongooDB");
    } catch (err) {
        console.error("loi connect database", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;