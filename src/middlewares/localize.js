class Localize {
    construct({resource}){
        this._langs = resource;
        this.isReady = false;
        this.lang = 'en_US';
    }

    fetchData(data){
        this.isReady = true;
        this._langs = data;

        if(typeof  this._events.ready === 'function'){
            this._events.ready(e);
        }
    }


    trans(text, lang){
        if(!lang) lang = this.lang;
        try {
            return this._langs[lang][text];
        } catch(e){
            return text;
        }
    }
}

export default Localize;

