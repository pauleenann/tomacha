import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// routes
import authRoutes from './routes/authRoutes.js'
import connectDb from './config/db.js';

dotenv.config()

const app = express();
const port = process.env.SERVER_PORT || 3000

// connect to MongoDB
connectDb();

app.use(cookieParser());
app.use(express.json()); 
app.use(cors({
    origin: true,  
    credentials: true,     
  }));

app.use('/api/auth', authRoutes)

app.listen(port, ()=>{
    console.info(`Server is running in port ${port}`)
})
