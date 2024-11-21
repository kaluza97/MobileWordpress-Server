import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import viewRoutes from './routes/viewRoutes';
import navigationRoutes from './routes/navigationRoutes';
import headerRoutes from './routes/headerRoutes';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/views', viewRoutes);
app.use('/api/settings/navigation', navigationRoutes);
app.use('/api/settings/header', headerRoutes);

app.get('/', (_req, res) => {
    res.send('Your Node.js server is working properly!')
})

mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => app.listen(9000, () => console.log("Server ready on port 9000.")))
    .catch((error: Error) => console.error(error));

export default app;
