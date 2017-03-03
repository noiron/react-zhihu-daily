import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../containers/Main';
import DetailContainer from './../containers/DetailContainer';
import StoryListContainer from './../containers/StoryListContainer';
import ThemeContainer from './../containers/ThemeContainer';


const route = (
    <Router history={browserHistory} key={Math.random()}>
        <Route path="/" component={Main}>
            <IndexRoute component={StoryListContainer} />
            <Route path="detail/:id" component={DetailContainer} />
            <Route path="theme/:id" component={ThemeContainer} />
        </Route>
    </Router>
)

export default route;