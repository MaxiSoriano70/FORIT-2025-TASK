import { Router } from "express";
import tasksRouter from "./api/tasks.router.js";

const apiRouter = Router();
apiRouter.use("/task", tasksRouter);

export default apiRouter;