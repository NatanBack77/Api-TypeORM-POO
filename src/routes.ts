import { Router, Request, Response } from "express";
import { createCategoryController } from "./controllers/createCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { updateCategoryController } from "./controllers/updateCategoryController";
import { createVideoController } from "./controllers/createVideoController";
import { GetAllVideoController } from "./controllers/GetAllVideoController";
import { resolveModuleName } from "typescript";

const routes = Router();

routes.post("/categories", new createCategoryController().handle);
routes.get("/categories",new GetAllCategoryController().handle)
routes.delete("/categories/:id",new DeleteCategoryController().handle)
routes.put("/categories/:id",new updateCategoryController().handle)

routes.post("/videos",new createVideoController().handle)
routes.get("/videos",new GetAllVideoController().handle)

export { routes };
