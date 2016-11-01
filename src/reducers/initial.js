import {LANGUAGE_LOADED } from  '../actions/actionType.js';

export function init(state, action){
    switch (action.type){
        case LANGUAGE_LOADED:{
            return Object.assign({}, state, {localize: {resources: action.resource}});
        } break;
        default :{
            return state;
        }
    }
}
