import { GetAllVideoRepository } from "../services/GetAllVideoRepository";
import { Request, Response } from "express";

export class GetAllVideoController {
	async handle(req: Request, res: Response) {
		const repo = new GetAllVideoRepository();
		const videos = await repo.execute();
		return res.send(videos);
	}
}
