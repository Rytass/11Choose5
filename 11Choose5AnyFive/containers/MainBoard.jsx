// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import KillKeepPage from './KillKeepPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/killKeep" component={KillKeepPage} />
      <Redirect to="/main" />
    </Switch>
  );
}
