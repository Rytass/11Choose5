// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AlertActions from '../actions/Alert.js';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  box: {
    padding: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: '1px solid #4a4a4a',
    borderRadius: 4,
    zIndex: 100,
  },
  text: {
    fontSize: 18,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: 0,
  },
};

type Props = {
  alertShowed: boolean,
  showAlert: Function,
}

class Alert extends PureComponent<Props> {
  componentDidUpdate(prevProps) {
    const {
      alertShowed,
      showAlert,
    } = this.props;

    if (!prevProps.alertShowed && alertShowed) {
      setTimeout(() => showAlert(false), 2000);
    }
  }

  render() {
    const {
      alertShowed,
    } = this.props;

    if (!alertShowed) return null;

    return (
      <div style={styles.wrapper}>
        <div style={styles.box}>
          <p style={styles.text}>号码已复制</p>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    alertShowed: state.Alert.alertShowed,
  }),
  dispatch => bindActionCreators({
    ...AlertActions,
  }, dispatch)
);

export default reduxHook(Alert);
