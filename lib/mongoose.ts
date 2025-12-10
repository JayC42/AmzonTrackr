import mongoose from 'mongoose';

let isConnected = false;// Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URL) return console.log('MONGODB_URL is not defined');

  if(isConnected) return console.log('=> using existing database connection');

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
    });

    isConnected = true;

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
  }
}