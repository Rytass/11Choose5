// @flow

import {
  SHOW_ALERT,
} from '../actions/Alert.js';

export default (state = {
  alertShowed: false,
}, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        ...state,
        alertShowed: action.alertShowed,
      };
    }

    default:
      return state;
  }
};
