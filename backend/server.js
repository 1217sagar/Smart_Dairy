import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js';

connectDB();

const port = process.env.PORT || 5000 ;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running good ...');
});

app.use('/api/products', ProductRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));  