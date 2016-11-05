import React from 'react';
import {connect} from 'react-redux';
import Header from './header.jsx';
import Menu from "./main-menu/index.jsx";

class Component extends React.Component{
    render(){
        return <div>
            <Header/>
            <h1>this is playing page</h1>
            <h3>lang: {this.props.localize.lang}</h3>
            <h3>test: {_i("hello world")}</h3>
			<Menu />
            </div>
    }
};

let mapStateToProps = (state) => state;

let  mapDispatchToProps = {

};

let  mergeProps = (stateProps, dispatchProps, ownProps) => {Object.assign({}, ownProps, stateProps, dispatchProps)};

var options = {

};

export default connect(mapStateToProps,  mapDispatchToProps)(Component);