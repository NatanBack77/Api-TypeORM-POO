import { Category } from "../entities/category";
import { Database } from "../dataSource";
import { AlreadExists } from "../helpers/api-errors";

type categoryRequest = {
	name: string;
	description: string;
};

export class createCategoryServices {
	async execute({ name, description }: categoryRequest): Promise<Category | AlreadExists> {
		const repo = Database.getRepository(Category);

		if (await repo.findOneBy({name})) {
            throw new AlreadExists("Category Alread Exists")
		}

		const category = repo.create({
			name,
			description,
		});
		repo.save(category);
		return category;
	}
}
