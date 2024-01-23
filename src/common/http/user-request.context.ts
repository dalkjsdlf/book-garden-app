import { RequestContext } from "nestjs-request-context";

export class UserRequestContext extends RequestContext {
  userId : string;
}