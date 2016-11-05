import * as types from "./actionType.js";

class AppAction{
    constructor(){
        this.localize = new LocalizeAction();
    }

    init(){
        return {type: types.APP_INIT};
    }

    initStart(){
        return {type: types.APP_INIT_START};
    }

    initDone(){
        return {type: types.APP_INIT_DONE}
    }
}

class LocalizeAction{
    languageLoaded(payload){
        return {type: types.LANGUAGE_LOADED, payload}
    }

    luangageLoadFaile(){
        return {type: types.APP_LOAD_LANGUAGE_FAILE}
    }

    laguageChange(){
        return {type: types.LANGUAGE_CHANGE}
    }
}

export default new AppAction();