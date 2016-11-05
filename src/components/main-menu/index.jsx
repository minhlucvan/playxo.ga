import React from 'react';
import Container from './container.jsx';
import Content from './content.jsx';
import Bullets from './bullets.jsx';
import Nav from './nav.jsx';

class Component extends React.Component{
	render(){
		  return <div className="main-menu">
		  <Container>
		  	<Bullets />
		  	<Content></Content>
			<Nav />
		  </Container>
		  </div>
	}
}

export default Component;