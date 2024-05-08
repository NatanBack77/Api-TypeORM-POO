import { Category } from "../entities/category";
import { Database } from "../dataSource";
import { NotExists } from "../helpers/api-errors";

export class DeleteCategoryRepository{
    async execute(id:string){
        const repo= Database.getRepository(Category)
        if(!await repo.findOneBy({id})){
            return new NotExists("Category does not exists!")
        }

        repo.delete(id)
    }
}