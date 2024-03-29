/***************************
 GUEST ROUTES
 *****************************/

import express from "express";
import beanologyRoutes from '../domains/guest/beanology/routes.js'
import roasterRoutes from '../domains/guest/roasters/routes.js'

const guestRouter = express.Router();

guestRouter.use('/beans', beanologyRoutes);
guestRouter.use('/roasters', roasterRoutes)

export default guestRouter