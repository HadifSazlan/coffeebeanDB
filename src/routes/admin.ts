/***************************
        ADMIN ROUTES
*****************************/

import express from "express";
import suppliersRoutes from "../domains/admin/suppliers/routes";
import beansRoutes from "../domains/admin/beans/routes";
import roastersRoutes from "../domains/admin/roasters/routes";

const adminRouter = express.Router();

adminRouter.use('/suppliers', suppliersRoutes);
adminRouter.use('/beans', beansRoutes);
adminRouter.use('/roasters', roastersRoutes);

export default adminRouter