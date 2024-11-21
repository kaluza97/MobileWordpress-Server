import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import viewRoutes from './routes/viewRoutes';
import navigationRoutes from './routes/navigationRoutes';
import headerRoutes from './routes/headerRoutes';

dotenv.config();

const app = express();

let corsOptions = {
    origin: ["https://mobile-wordpress-web.vercel.app/", "https://mobile-wordpress-server.vercel.app/"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/views', viewRoutes);
app.use('/settings/navigation', navigationRoutes);
app.use('/settings/header', headerRoutes);

app.get('/', (_req, res) => {
    res.send('Your Node.js server is working properly!')
})

mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));


export default app;
