import express from 'express';
import bodyParser from 'body-parser';
import suppliersRoutes from './src/suppliers/routes.js';
import beansRoutes from './src/beansprofile/routes.js';
import roastersRoutes from './src/roasters/routes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/v1/suppliers', suppliersRoutes);
app.use('/api/v1/beansprofile', beansRoutes);
app.use('/api/v1/roasters', roastersRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));