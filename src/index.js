import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/menu';
import Home from './components/home';
import PostIndex from './components/posts/post-index';
import PostNew from './components/posts/post-new';
import PostShow from './components/posts/posts-show';
import Video from './components/videos/video';
import Weather from './components/weather/weather';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/videos" component={Video} />
          <Route path="/weather" component={Weather} />
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/posts" component={PostIndex} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
