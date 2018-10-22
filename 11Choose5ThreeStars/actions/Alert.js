// @flow

export const SHOW_ALERT = 'ALERT/SHOW_ALERT';

export function showAlert(alertShowed) {
  return {
    type: SHOW_ALERT,
    alertShowed,
  };
}
