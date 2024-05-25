import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import BreadRouter from './routes/bread.router.js';
import userRouter from './routes/user.router.js';
import orderRouter from './routes/order.router.js';
import { dbconnect } from './config/database.config.js';
dbconnect();
const app = express();
app.use(express.json());


app.use(cors(
    {
        credentials: true,
        origin:'*' // Permite solicitudes desde cualquier origen (solo para pruebas)
       // origin: 'http://localhost:3000'

    }
));

app.use('/api/breads', BreadRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});