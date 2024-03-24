import { GetAllCategoryRepository } from "../services/GetAllCategoryRepository";
import { Request, Response } from "express";

export class GetAllCategoryController {
	async handle(req: Request, res: Response) {
		const repo = new GetAllCategoryRepository();

		const categories = await repo.execute();
		res.status(200).json(categories);
	}
}
