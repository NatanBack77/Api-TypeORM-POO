import { Video } from "../entities/Video";
import { Database } from "../dataSource";

export class GetAllVideoRepository {
	async execute() {
		const repo = Database.getRepository(Video);
		const Videos =  await repo.find({
            relations : ["category"]
        });
		return Videos;
	}
}
