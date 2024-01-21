import { BaseEntity, Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

export abstract class AuditingEntity extends BaseEntity{

    @CreateDateColumn()
    createAt : string
    
    @Column({default: 'anonymous'})
    createdBy : string

    @UpdateDateColumn()
    updateAt : string
    
    @Column({default: 'anonymous'})
    updateBy : string
}