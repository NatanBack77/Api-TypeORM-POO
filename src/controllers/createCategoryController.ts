import { Request,Response } from "express"
import { createCategoryServices } from "../services/createCategoryRepository"
 
 export class createCategoryController{
    async handle(req:Request,res:Response){
        const { name, description } = req.body
        const service = new createCategoryServices

        const result = await service.execute({name,description})

        if (result instanceof Error){
            return res.status(400).json(result.message)
        }
        console.log(result)
        return res.json(result)
    }
 }