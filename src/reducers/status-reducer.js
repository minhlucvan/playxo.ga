import {APP_INIT_DONE, APP_INIT_START, APP_INIT_FAILE} from '../actions/actionType.js';

export default function (state, action) {
    if(!state) return "empty";
    switch (action.type){
        case APP_INIT_START:{
            return Object.assign({}, state, {current: 'INIT_START'});
        } break;
        case APP_INIT_DONE: {
            return Object.assign({}, state, {ready: true, current: 'READY'});
        } break;
        case APP_INIT_FAILE:{
            return Object.assign({}, state, {ready: false, current: 'INIT_FAILE'});
        } break;
        default: {
            return state;
        }
    }
}