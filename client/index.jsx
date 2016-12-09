import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './components/LandingPage.jsx';
import NotFound from './components/NotFound.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="*" component={NotFound} />
    </Router>
    ), document.getElementById('app'));
