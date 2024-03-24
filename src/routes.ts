import { Router } from "express";
import { createCategoryController } from "./controllers/createCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";

const routes = Router();

routes.post("/categories", new createCategoryController().handle);
routes.get("/categories",new GetAllCategoryController().handle)
routes.delete("/categories/:id",new DeleteCategoryController().handle)

export { routes };
