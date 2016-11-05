import React from 'react';

class Component extends React.Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		  return (
		  	<div className="bullets">
		  		<button className="bullet bullet-prev"></button>
		  		<button className="bullet bullet-next"></button>
		  	</div>
		  )
	}
}

export default Component;