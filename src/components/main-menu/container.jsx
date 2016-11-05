import React from 'react';

class Component extends React.Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		  return <div className="container" >{this.props.children}</div>
	}
}

export default Component;