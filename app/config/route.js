import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../containers/Main';
import DetailContainer from './../containers/DetailContainer';
import StoryListContainer from './../containers/StoryListContainer';

const Test = () => (<div>test 11111</div>);

const route = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={StoryListContainer} />
            <Route path="detail/:id" component={DetailContainer} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
)

export default route;