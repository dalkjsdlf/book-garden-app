import { AuditingEntity } from "src/common/entity/Auditing.entity";
import { Article } from "src/modules/article/entities/article.entity";
import { Book } from "src/modules/book/entities/book.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookCard extends AuditingEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length:500, nullable:false})
    subtitle : string;

    @ManyToOne(()=>User, (user)=>user.bookCards)
    // @JoinColumn([
    //     { name: "userId", referencedColumnName: "id" },
    // ])
    user : User;
     
    // @OneToOne(()=>Article)
    // article: Article;
    
    // @OneToOne(()=>Book)
    // book:Book;

    // @OneToMany(()=>Phraise, phraise=>phraise.bookcard)
    // phraise : Phraise
}
