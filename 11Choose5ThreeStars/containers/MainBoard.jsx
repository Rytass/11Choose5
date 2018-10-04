// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import KillKeepTwoPage from './KillKeepTwoPage';
import OtherPage from './OtherPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/killKeepTwo" component={KillKeepTwoPage} />
      <Route path="/other" component={OtherPage} />
      <Redirect to="/main" />
    </Switch>
  );
}
