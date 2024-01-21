import { Inject, Injectable } from "@nestjs/common"
import { REQUEST } from "@nestjs/core"

@Injectable()
export class CurrentUserService {
    private userId : string;
    constructor(@Inject(REQUEST) private request: any) {}
    
    
    setUserId(userId : string){
        this.userId = userId;
    }

    getUserId() : string{ 
        return this.userId;
    }
}