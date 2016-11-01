import React from 'react';
import {connect} from 'react-redux';

import Flash from './flash.jsx';
import Playing from './playing.jsx';

import Localize from './../middlewares/localize.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    getContent(){
        if(this.props.ready){
            return <Playing />;
        } else {
            return <Flash />;
        }
    }

    render(){
        return this.getContent();
    }
}

let mapStateToProps = (state) => state;

let  mapDispatchToProps = {

};

let  mergeProps = (stateProps, dispatchProps, ownProps) => {Object.assign({}, ownProps, stateProps, dispatchProps)};

var options = {

};

export default connect(mapStateToProps,  mapDispatchToProps)(App);