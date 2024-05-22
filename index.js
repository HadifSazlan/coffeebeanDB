import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './src/domains/admin/auth/routes.js';
import adminRouter from './src/routes/admin.js'
import guestRouter from './src/routes/guest.js'
import cors from 'cors'

import passport from "passport";
import './src/config/passport.js';

const app = express();
const PORT = process.env.PORT;

app.use(passport.initialize());

const whitelist = [process.env.FE_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Are you lost? Fret not. With hardship, comes ease.'))
        }
    }
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Routes
app.use('/api/v1/', authRoutes);
app.use('/api/v1', guestRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));