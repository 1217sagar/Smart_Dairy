import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js';
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

connectDB();

const port = process.env.PORT || 5000 ;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running good ...');
});

app.use('/api/products', ProductRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));  