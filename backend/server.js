import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js';
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'

connectDB();

const port = process.env.PORT || 5000 ;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running good ...');
});

app.use('/api/products', ProductRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send({clientId: process.env.PAYPAL_CLIENT_ID})
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));  