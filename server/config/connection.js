const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks',
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
// );

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1); // Exit the process with an error code
  }
}

connectToDatabase();

module.exports = mongoose.connection;
