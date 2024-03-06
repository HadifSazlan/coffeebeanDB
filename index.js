import express from 'express';
import bodyParser from 'body-parser';
import suppliersRoutes from './src/suppliers/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/v1/suppliers', suppliersRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));