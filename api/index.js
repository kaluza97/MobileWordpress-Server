import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import viewRoutes from './routes/viewRoutes';
import navigationRoutes from './routes/navigationRoutes';
import headerRoutes from './routes/headerRoutes';

dotenv.config();

const app = express();

const corsOptions = {
    origin: ["https://mobile-wordpress-web.vercel.app", 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/views', viewRoutes);
app.use('/api/settings/navigation', navigationRoutes);
app.use('/api/settings/header', headerRoutes);

app.get('/', (_req, res) => {
    res.send('Your Node.js server is working properly!')
})

mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));


export default app;
