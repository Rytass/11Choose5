// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import KillKeepTwoPage from './KillKeepTwoPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/killKeepTwo" component={KillKeepTwoPage} />
      <Redirect to="/main" />
    </Switch>
  );
}
