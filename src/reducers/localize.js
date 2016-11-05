import {LANGUAGE_LOADED, APP_LOAD_LANGUAGE_FAILE, LANGUAGE_CHANGE} from '../actions/actionType.js';

export default function (state, action) {
    if(!state) return "empty";
    switch (action.type){
        case LANGUAGE_LOADED:{
            let data = Object.assign({}, state, action.payload);
            attachI18n(data);
            return data;
        } break;
        case LANGUAGE_CHANGE:{
            let data = Object.assign({}, state, {lang: action.payload});
            attachI18n(data);
            return data;
        } break;
        default: {
            return state;
        }
    }
}

class Localize {
    constructor(data){
        this._langs = null;
        this.isReady = false;
        this.lang = 'vi_VN';
        if(data){
            this.fetchData(data);
        }
    }

    fetchData({resources, lang}){
        this.isReady = true;
        this._langs = resources;
        this.lang = lang;
    }


    trans(text, lang){
        if(!lang) lang = this.lang;

        try {
            return this._langs[lang][text];
        } catch(e){
            return text;
        }
    }
};

function attachI18n(option){
    window.localize = new Localize(option);

    if(typeof window._i === 'function') return;

    window._i = function(text){
        if(!window.localize || !window.localize.isReady ){
            console.error("Localize is undefined or not ready.");
        }

        return window.localize.trans(text);
    }
}

