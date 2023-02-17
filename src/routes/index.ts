import { Router } from "express";
import { userRoutes } from "./user.routes";
import { groupRoutes } from "./group.routes";

const routes = Router();


routes.use("/users", userRoutes);
routes.use("/groups", groupRoutes);


export { routes }