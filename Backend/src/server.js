import dotenv from 'dotenv';
dotenv.config();
import {fileURLToPath} from 'url';
import express from 'express'
import cors from 'cors';
import BreadRouter from './routes/bread.router.js';
import userRouter from './routes/user.router.js';
import orderRouter from './routes/order.router.js';
import { dbconnect } from './config/database.config.js';
import { dirname } from 'path';
import path from 'path';
dbconnect();
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
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


const publicFolder=path.join(__dirname, 'public');
app.use(express.static(publicFolder));
app.get('*', (req, res) => {
    const indexFilePath = path.join(publicFolder, 'index.html');    
    res.sendFile(indexFilePath);
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});