import * as ActionType from "./../actions/actionType.js";

export default class Action {
    construct(type, payload){
       if(!ActionType.hasOwnProperty(type)){
            throw new Error("action type is not defined.");
       }

       this.type = type;
       this.payload = payload;
    }
}