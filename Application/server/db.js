const mongoose = require('mongoose');
const dotenv = require('dotenv');

let env = dotenv.config();

// create a function that will connect to a MongoDB database
const connectDB = async () => {
  try {
    // Create variable that will be used to establish a connection to the database
    // The MONGO_URI is defined in our .env file
    // const conn = await mongoose.connect(process.env.MONGO_URI);

    //for testing purpose only
    const URI =
      'mongodb+srv://admin:adminPassword@cluster0.opir5pn.mongodb.net/?retryWrites=true&w=majority';
    const conn = await mongoose.connect(URI);
    console.log('MongoDB connected');

    /*
MONGO_URI = 'mongodb+srv://admin:adminPassword@cluster0.6jzitkw.mongodb.net/?retryWrites=true&w=majority'
MONGO_URI_TEST = 'mongodb+srv://rachel:powerClap@dataportal.hyltuzo.mongodb.net/?retryWrites=true&w=majority'
    */

    // Console log the local host if the connection is successful
    // console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline);
    // The error handler
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;