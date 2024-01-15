import { BaseEntity, Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class AuditingEntity extends BaseEntity{

    @CreateDateColumn()
    createdDate : string
    
    @Column({default: 'anonymous'})
    createdUserId : string

    @UpdateDateColumn()
    modifyDate : string
    
    @Column({default: 'anonymous'})
    modifyUserId : string
}