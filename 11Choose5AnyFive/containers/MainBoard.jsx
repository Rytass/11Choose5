// @flow

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage';
import KillKeepTwoPage from './KillKeepTwoPage';
import KillKeepThreeFourPage from './KillKeepThreeFourPage';
import AcrossFitTypePage from './AcrossFitTypePage';

export default function () {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/killKeepTwo" component={KillKeepTwoPage} />
      <Route path="/killKeepThreeFour" component={KillKeepThreeFourPage} />
      <Route path="/acrossFitType" component={AcrossFitTypePage} />
      <Redirect to="/main" />
    </Switch>
  );
}
