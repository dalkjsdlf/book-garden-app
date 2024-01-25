import { AuditingEntity } from "src/common/entity/Auditing.entity";
import { BookCard } from "src/modules/book-card/entities/book-card.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class User extends AuditingEntity{
        
    @PrimaryColumn({length:50})
    userId : string;
    
    @Column({length:200, nullable: false})
    email : string;
    
    @Column({length:200, nullable: false})
    password : string;
    
    @Column({length:100, nullable: false})
    name : string;

    @OneToMany(()=>BookCard, bookCard=>bookCard.user)
    bookCards : BookCard[];
}
