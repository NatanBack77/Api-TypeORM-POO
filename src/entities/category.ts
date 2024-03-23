import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"
import { Video } from "./Video";


@Entity("categories")
export class Category {
	@PrimaryColumn()
	id: string;

	@Column({type:"text"})
	name: string;

	@Column({type:"text"})
	description: string;

    @OneToMany(()=>Video, video=>video.category)
    video:Video[] 

	@CreateDateColumn()
	created_at: Date;

    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }
}
