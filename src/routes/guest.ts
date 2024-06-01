/***************************
        GUEST ROUTES
*****************************/

import express from "express";
import beansRoutes from '../domains/guest/beans/routes.js'
import roasterRoutes from '../domains/guest/roasters/routes.js'

const guestRouter = express.Router();

guestRouter.use('/beans', beansRoutes);
guestRouter.use('/roasters', roasterRoutes)

export default guestRouter