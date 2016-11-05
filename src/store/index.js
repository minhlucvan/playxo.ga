import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducers';
import rootEpic from '../middlewares';
import * as Actions from '../actions/actionType.js';

const initialState = {
    status: {
        ready: false,
        current: "NOT_INIT",
    },
    log: {

    },
    error:{

    },
    notify:{

    },
    config: {
    	ajaxTimeOut: 1000*60,
    },
    localize: {
        url: 'languages.json',
        lang: "en_US",
        resources: null,
    }
};

const epicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore(reducer, initialState, applyMiddleware(epicMiddleware));
store.dispatch({type: Actions.APP_INIT_START});

export default store;