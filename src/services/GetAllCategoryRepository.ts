import { Category } from "../entities/category";
import { Database } from "../dataSource";

export class GetAllCategoryRepository {
	async execute() {
		const repo = Database.getRepository(Category);

		const result = await repo.find();
		return result;
	}
}
