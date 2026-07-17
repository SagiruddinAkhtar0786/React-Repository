const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/inotebook'; // Database name: inotebook

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); //only validates the server connection, not whether the database actually exists.
    console.log('Connected to MongoDB server');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


/* const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI).then(() => {  // Use .then() not comma
      console.log('Connected to MongoDB');
    }).catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}; */

module.exports = connectToMongo;