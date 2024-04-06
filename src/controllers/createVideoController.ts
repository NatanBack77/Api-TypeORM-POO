import { Request,Response} from "express";
import { createVideoRepository } from "../services/createVideoRepository";


export class createVideoController{
    async handle(req:Request,res:Response){
        const {name,description,duration , category_id}=req.body
        const repo = new createVideoRepository
        const result = await repo.execute( {name, description, duration, category_id })
        if(result instanceof Error){
            res.status(400).json(result.message)
        }
        res.status(201).json(result)
    }
}