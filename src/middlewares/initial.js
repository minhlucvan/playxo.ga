import * as actionType from '../actions/actionType.js';
import Rx from 'rxjs';

import Localize from "./localize.js";

export  function initI18n(action, store){
    let url = store.getState().localize.url
    return Rx.Observable.fromPromise(fetch(url))
        .map((res) => res.json())
        .forEach(res => {
            store.dispatch({type: actionType.LANGUAGE_LOADED, resources: res})
        });
}

function attachI18n(option){
    console.log('hi there');
    window.localize = new Localize(this.state.resources);
    if(typeof window._i === 'function') return;

    window._i = function(text){
        if(!window.localize || !window.localize.isReady ){
            throw new Error("Localize is undefined of not ready.");
        }

        return window.localize.trans(text);
    }
}

function setupI18n(action, store){
    let opt = store.getState().localize;
    return action.ofType(actionType.LANGUAGE_LOADED)
        .do(()=>{
            attachI18n(opt);
        })
        .mapTo({type: actionType.IGNORE});
}

function onStep(){
    console.log('step done');
}

function onStepFail(){
    console.log('step fail');
}
export function init(action, store){
    let i18n = initI18n(action, store);

    return action.ofType(actionType.APP_INIT_START)
        .merge(i18n)
        .all(() => {type: actionType.APP_INIT_DONE})
        .map(store.dispatch);
}