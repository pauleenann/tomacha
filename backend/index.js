import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// routes
import authRoutes from './routes/authRoutes.js'
import connectDb from './config/db.js';

dotenv.config()

const app = express();
const port = process.env.SERVER_PORT || 3000

// connect to MongoDB
connectDb();

// setup cors
app.use(cors())

app.use('/api/auth', authRoutes)

app.listen(port, ()=>{
    console.info(`Server is running in port ${port}`)
})
