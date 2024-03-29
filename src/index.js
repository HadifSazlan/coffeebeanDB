import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './domains/admin/auth/routes.js';
import adminRouter from './routes/admin.js'
import guestRouter from './routes/guest.js'

import passport from "passport";
import './config/passport.js';

const app = express();
const PORT = 3000;

app.use(passport.initialize());

app.use(bodyParser.json());

// Routes
app.use('/api/v1/', authRoutes);
app.use('/api/v1', guestRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));