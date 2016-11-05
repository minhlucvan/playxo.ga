import React from 'react';
import {connect} from 'react-redux';

import Flash from './flash.jsx';
import Playing from './playing.jsx';

class App extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {};
        this.store = props.store;
        console.log(this.props.dispatch);
    }

    getContent(){
        if(this.props.status.ready){
            return  <Playing />
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