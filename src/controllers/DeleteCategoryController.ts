import { DeleteCategoryRepository } from "../services/DeleteCategoryRepository";
import { Request, Response } from "express";

export class DeleteCategoryController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const repo = new DeleteCategoryRepository();

		const result = await repo.execute(id);
		if (result instanceof Error) {
			return res.status(400).json(result.message);
		}
		return res.status(204).end();
	}
}
