import { Column, CreateDateColumn, Entity, JoinColumn,  ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuid} from "uuid"
import { Category } from "./category";
import 'reflect-metadata'

@Entity("videos")
export class Video {
	@PrimaryColumn()
	id: string;

	@Column({type:"text"})
	name: string;

	@Column({type:"text"})
	description: string;
    
    @Column({type:"numeric"})
    duration:number
    
    @Column({type:"text"})
    category_id:string

    @ManyToOne(()=>Category, category=>category.video)
    @JoinColumn({name:"category_id"})
    category:Category

	@CreateDateColumn()
	created_at: Date;

    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }
}
