// @flow

import ReactDOM from 'react-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { getStore } from './store';
import App from './App';

const history = createHistory();
const store = getStore(history);

const rootNode = document.querySelector('#root');

if (rootNode) {
  ReactDOM.render(
    <App store={store} history={history} />,
    rootNode,
  );
}
