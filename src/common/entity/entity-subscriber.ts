import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { CurrentUserService } from "./current-user.service";
import { User } from "src/modules/user/entities/user.entity";

@EventSubscriber()
export class EntitySubscriber implements EntitySubscriberInterface<User> {
    constructor(private currentUserSvc: CurrentUserService,
                private dataSource: DataSource) {
        this.dataSource.subscribers.push(this);
    }
    beforeInsert(event: InsertEvent<any>) {
        console.log(`BEFORE ENTITY INSERTED: `, event.entity) 
        event.entity.createdBy = this.currentUserSvc.getUserId();
    }
    afterInsert(event: InsertEvent<any>) {
        console.log(`AFTER ENTITY INSERTED: `, event.entity);
    }
    beforeUpdate(event: UpdateEvent<any>) {
        console.log(`BEFORE ENTITY UPDATED: `, event.entity);
        event.entity.updatedBy = this.currentUserSvc.getUserId();
    }
    afterUpdate(event: UpdateEvent<any>) {
        console.log(`AFTER ENTITY UPDATED: `, event.entity);
    }
}