import { Category } from "../entities/category";
import { Database } from "../dataSource";

export class DeleteCategoryRepository{
    async execute(id:string){
        const repo= Database.getRepository(Category)
        if(!await repo.findOneBy({id})){
            return new Error("Category does not exists!")
        }

        repo.delete(id)
    }
}