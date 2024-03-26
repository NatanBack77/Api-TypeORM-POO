import { Request, Response } from "express";
import { updateCategoryRepository } from "../services/updateCategoryRepository";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

export class updateCategoryController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const { name, description } = req.body;

		const repo = new updateCategoryRepository();
        const result = await repo.execute({id,name,description})

		if (result instanceof Error) {
			res.status(400).json(result.message);
		}

		res.json(result);
	}
}
