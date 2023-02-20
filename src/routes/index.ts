import { Router } from "express";
import { userRoutes } from "./user.routes";
import { groupRoutes } from "./group.routes";
import { companyRoutes } from "./company.routes";

const routes = Router();


routes.use("/users", userRoutes);
routes.use("/groups", groupRoutes);
routes.use("/companies", companyRoutes)


export { routes }