
import { Database } from "../dataSource";
import { Category} from "../entities/category";
import { Video } from "../entities/Video";
Video

type createVideoRequest={
    name :string,
    description:string,
    duration:number,
    id:string ,
    category_id:string
 
}

export class createVideoRepository{
    async execute({name,description,duration,category_id,id,}:createVideoRequest):Promise<Error | Video>{
      const repo= Database.getRepository(Video)
      const repoCategory = Database.getRepository(Category)

      if(!(await repoCategory.findOneBy({id}))){
        return new Error("Category does not exists")
      }
     const video = repo.create({name,description,duration,category_id})
     repo.save(video)

     return video
    }
}