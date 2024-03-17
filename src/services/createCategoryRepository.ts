import { Category } from "../entities/category";
import { Database } from "../dataSource";

type categoryRequest = {
	name: string;
	description: string;
};

export class createCategoryServices {
	async execute({ name, description }: categoryRequest): Promise<Category | Error> {
		const repo = Database.getRepository(Category);

		if (await repo.findOneBy({name})) {
            return new Error("Category Alread Exists")
		}

		const category = repo.create({
			name,
			description,
		});
		repo.save(category);
		return category;
	}
}
