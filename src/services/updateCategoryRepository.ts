import { Category } from "../entities/category";
import { Database } from "../dataSource";

type categoryUpdateRequest = {
	id: string;
	name: string;
	description: string;
};

export class updateCategoryRepository {
	async execute({ id, name, description }: categoryUpdateRequest) {
		const repo = Database.getRepository(Category);
		const category = await repo.findOneBy({ id });

		if (!category) {
			return new Error("Category does not exists");
		}

		category.name = name ? name : category.name;
		category.description = description ? description : category.description;

		repo.save(category);

		return category;
	}
}
