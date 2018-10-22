// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import Alert from './Alert';

export default combineReducers({
  Alert,
  form: formReducer,
  routing: routerReducer,
});
