/* eslint-disable no-underscore-dangle */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ComponentView from './components/component-view';

import './app.component.scss';

const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ComponentView} />
    </Router>
  </Provider>,
  document.getElementById('oc-examples'),
);
