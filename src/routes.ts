import { Router } from "express";
import { createCategoryController } from "./controllers/createCategoryController";

const routes = Router()

routes.post("categories", new createCategoryController().handle)


export {routes}