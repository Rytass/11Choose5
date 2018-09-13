// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Field,
  initialize,
  change,
  formValueSelector,
} from 'redux-form';
import ResultArea from './ResultArea';
import NumberTextInput from './Form/NumberTextInput';
import { INIT_FORM_VALUE } from '../shared/initValue';
import { MAIN_FORM } from '../shared/form';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    width: 200,
    height: '100%',
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px 16px',
    margin: '4px 8px 0 8px',
    border: '1px solid #4a4a4a',
  },
  failWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 0 12px 6px',
  },
  label: {
    fontSize: 14,
    letterSpacing: 1,
    color: '#4a4a4a',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    padding: '0 6px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  submitBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 18,
    letterSpacing: 1,
    backgroundColor: '#21f25c',
    color: '#4a4a4a',
    border: '1px solid #4a4a4a',
    margin: '2px 0',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.8,
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  clearBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 18,
    letterSpacing: 1,
    backgroundColor: '#f0f71b',
    color: '#4a4a4a',
    border: '1px solid #4a4a4a',
    margin: '2px 0',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.8,
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
};

type Props = {
  clearForm: Function,
  resultNumber: Array<{
    num: number,
  }>,
  isRunning: boolean,
}

class ResultSection extends PureComponent<Props> {
  render() {
    const {
      resultNumber,
      clearForm,
      isRunning,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <ResultArea resultNumber={resultNumber} isRunning={isRunning} />
        <div style={styles.failWrapper}>
          <span style={styles.label}>条件总容错</span>
          <Field
            name="failFrom"
            component={NumberTextInput} />
          <span style={styles.label}>-</span>
          <Field
            name="failTo"
            component={NumberTextInput} />
        </div>
        <div style={styles.buttonWrapper}>
          <button
            type="submit"
            key="submit"
            style={styles.submitBtn}>
            开始缩水
          </button>
          <button
            type="button"
            key="clear"
            onClick={() => clearForm()}
            style={styles.clearBtn}>
            清空条件
          </button>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    resultNumber: selector(state, 'resultNumber'),
  }),
  dispatch => bindActionCreators({
    changeResultNumber: value => change(MAIN_FORM, 'resultNumber', value),
    clearForm: () => initialize(MAIN_FORM, INIT_FORM_VALUE),
  }, dispatch),
);

export default reduxHook(radium(ResultSection));
