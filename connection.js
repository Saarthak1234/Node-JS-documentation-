// const mong = require("mongoose");
// mong.set('strictQuery', true);
// async function connectMongoDB(url){
//     return mong.connect('url'/*URL of the database*/); //Returns a promise.
// }
const mongoose = require('mongoose');
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = {
    connectMongoDB,
};
