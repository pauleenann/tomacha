import mongoose from 'mongoose'

const connectDb = ()=>{
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err.message);
      process.exit(1); // Exit the app on DB failure
    });
}

export default connectDb;