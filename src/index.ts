import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import viewRoutes from './routes/viewRoutes';
import navigationRoutes from './routes/navigationRoutes';
import headerRoutes from './routes/headerRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use('/api/views', viewRoutes);
app.use('/api/settings/navigation', navigationRoutes);
app.use('/api/settings/header', headerRoutes);

mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error: Error) => console.error(error));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
