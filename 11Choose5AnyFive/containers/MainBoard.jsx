// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Redirect to="/main" />
    </Switch>
  );
}
