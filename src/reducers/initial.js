import {LANGUAGE_LOADED , APP_INIT_DONE} from  '../actions/actionType.js';

export function init(state, action){
    switch (action.type){
        case LANGUAGE_LOADED:{
            return Object.assign({}, state, {localize: {resources: action.resource}});
        } break;
        case APP_INIT_DONE: {
            console.log(Object.assign({}, state, {ready: true}));
            return Object.assign({}, state, {ready: true});
        } break;
        default :{
            return state;
        }
    }
}
