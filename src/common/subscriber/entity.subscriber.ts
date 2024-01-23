import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { Logger } from "@nestjs/common";
import { RequestContext } from "nestjs-request-context";

@EventSubscriber()
export class EntitySubscriber implements EntitySubscriberInterface {
    
    //Logger 객체
    private logger : Logger = new Logger();

    constructor(
                private datasource : DataSource,
                ) {
        this.logger.debug(`UserEntitySubscriber`);
        this.datasource.subscribers.push(this);
    }


    async beforeInsert(event: InsertEvent<any>) {
 
        console.log(`BEFORE USER ENTITY INSERTED: `, event.entity);
        
        const userIdFromRequest = RequestContext.currentContext.req.userId;
        this.logger.debug(`BEFORE USER ENTITY INSERTED: [${userIdFromRequest}]`);
        event.entity.createdBy = userIdFromRequest;
        event.entity.updatedBy = userIdFromRequest;
    }
    
    async beforeUpdate(event: UpdateEvent<any>) {
        
        const userIdFromRequest = RequestContext.currentContext.req.userId;
        this.logger.debug(`BEFORE USER ENTITY UPDATED: [${userIdFromRequest}]`);
        
        event.entity.updatedBy = userIdFromRequest;
    }
}