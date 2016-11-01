import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducers';
import {init} from '../middlewares';
import * as Actions from '../actions/actionType.js';

const initialState = {
    ready: false,
    config: {

    },
    localize: {
        url: 'languages.json',
        language: "en_US",
        resources: null,
    }
};

const epicMiddleware = createEpicMiddleware(init);

let store = createStore(reducer, initialState, applyMiddleware(epicMiddleware));
store.dispatch({type: Actions.APP_INIT_START, payload: 10});

export default store;