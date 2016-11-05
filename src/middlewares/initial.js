import * as actionType from '../actions/actionType.js';
import Rx from 'rxjs';
import Request from 'superagent';

export  function initI18n(action, store){
    let url = store.getState().localize.url;
    let ms = store.getState().config.ajaxTimeOut;;
    let act = Rx.Observable.create((obsever) => {
        Request.get(url)
        .timeout(ms)
        .end((err, res) => {
            if(!err){
                obsever.next(res);
                obsever.complete(res);
            } else {
                obsever.error(err);
            }
            
        });
    });

    return act
        .pluck("text")
        .map(JSON.parse)
        .map((payload) => ({type: actionType.LANGUAGE_LOADED, payload}) )
        .do(store.dispatch)
        .mapTo({type: actionType.IGNORE});
}

function wrapProcess(items){
    return Rx.Observable.of(items)
        .concatAll();
}

export function init(action, store){
    function onStep(i){
        //console.log('step done');
    }

    function onStepFail(e){

    }

    function onDone(){
      //  console.log("all done");
        //store.dispatch({type: actionType.APP_INIT_DONE, text: "call back"});
    }

    var observer = Rx.Subscriber.create(onStep, onStepFail, onDone);
    var process = wrapProcess(initI18n(action, store));
    process.subscribe(observer);

    return action.ofType(actionType.APP_INIT_START)
        .switchMap(() => process)
        .mapTo({type: actionType.APP_INIT_DONE})
        .catch(payload => Rx.Observable.of({
            type: actionType.APP_INIT_FAILE,
            payload})
        );
}
