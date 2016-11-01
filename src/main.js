import ReactDom from 'react-dom';
import {Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app.jsx';
import store from './store';


ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/public" component={App}>
                <Route path="foo" component={App}/>
                <Route path="bar" component={App}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app'));
