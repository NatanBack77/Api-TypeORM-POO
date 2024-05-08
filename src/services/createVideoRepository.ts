import { Database } from "../dataSource";
import { Category } from "../entities/category";
import { Video } from "../entities/Video";
import { AlreadExists, ApiError } from "../helpers/api-errors";


type createVideoRequest = {
	name: string;
	description: string;
	duration: number;
	category_id: string;
};

export class createVideoRepository {
	async execute({
		name,
		description,
		duration,
		category_id,
	}: createVideoRequest): Promise<Error | Video> {
		const repo = Database.getRepository(Video);
		const repoCategory = Database.getRepository(Category);

		if (!(await repoCategory.findOneBy({ id: category_id }))) {
			return   new AlreadExists("Category does not exist")
		}
		const video = repo.create({ name, description, duration, category_id });
		await repo.save(video);

		return video;
	}
}
