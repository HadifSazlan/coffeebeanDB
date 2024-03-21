import express from 'express';
import bodyParser from 'body-parser';
import suppliersRoutes from './domains/suppliers/routes.js';
import beansRoutes from './domains/beanology/routes.js';
import roastersRoutes from './domains/roasters/routes.js';
import roastsRoutes from './domains/roastology/routes.js';
import relationRoutes from './domains/relation/routes.js'
import authRoutes from './domains/auth/routes.js';
import passport from "passport";
import './config/passport.js';

const app = express();
const PORT = 3000;

app.use(passport.initialize());

app.use(bodyParser.json());
app.use('/api/v1/', authRoutes);
app.use('/api/v1/suppliers', suppliersRoutes);
app.use('/api/v1/beanology', beansRoutes);
app.use('/api/v1/roasters', roastersRoutes);
app.use('/api/v1/roastology', roastsRoutes);
app.use('/api/v1/relation', relationRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));