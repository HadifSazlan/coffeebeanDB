/***************************
        ADMIN ROUTES
*****************************/
import express from "express";
import suppliersRoutes from "../domains/admin/suppliers/routes.js";
import beansRoutes from "../domains/admin/beans/routes.js";
import roastersRoutes from "../domains/admin/roasters/routes.js";
const adminRouter = express.Router();
adminRouter.use('/suppliers', suppliersRoutes);
adminRouter.use('/beans', beansRoutes);
adminRouter.use('/roasters', roastersRoutes);
export default adminRouter;
