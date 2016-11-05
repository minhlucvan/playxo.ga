import * as ActionType from "../actions/actionType.js";
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import status from './status-reducer.js';
import localize from './localize.js';

import {init} from './initial.js';

let root = combineReducers({
    status,
    localize
});

export default root;