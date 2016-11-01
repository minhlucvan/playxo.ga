import * as ActionType from "../actions/actionType.js";
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import {init} from './initial.js';

function reducer(state, action){
    console.log(action);
    console.log(state);
    return state;
}

combineReducers({
    reducer,
    init,
    routing: routerReducer
});


export default reducer;