const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
	try {
		const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
			//must add in order to not get any error masseges:
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});
		console.log(`MongoDB Connected: ${connectDB.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};
module.exports = connectDB;
