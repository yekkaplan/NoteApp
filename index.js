/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
