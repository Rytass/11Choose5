// @flow

import React, { PureComponent } from 'react';
import { clipboard } from 'electron';
import radium from 'radium';
import {
  Field,
  change,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import TextArea from './Form/TextArea.jsx';
import { transOrigin } from '../helper/operator.js';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    height: 150,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '12px 8px',
    margin: 4,
    border: '1px solid #4a4a4a',
  },
  title: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 0 2px 6px',
  },
  numberText: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '2px 0 6px 0',
  },
  btnWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 0 12px',
  },
  actionBtn: {
    border: '1px solid #4a4a4a',
    padding: '6px 8px',
    margin: '0 1px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
};

type Props = {
  changeField: Function,
  killChooseLength: number,
}

class KillChooseSection extends PureComponent<Props> {
  render() {
    const {
      changeField,
      killChooseLength,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <Field
          name="killChoose"
          placeholder="杀直选大底，双击清空"
          component={TextArea} />
        <div style={styles.btnWrapper}>
          <span style={styles.numberText}>
            {`杀直选:${killChooseLength}注`}
          </span>
          <span style={styles.numberText}>
            数字间用 空格隔开
          </span>
          <span style={styles.numberText}>
            每行一注 双击清空
          </span>
          <div>
            <button
              type="button"
              key="paste"
              style={styles.actionBtn}
              onClick={() => changeField(clipboard.readText())}>
              贴
            </button>
            <button
              type="button"
              key="clear"
              style={styles.actionBtn}
              onClick={() => changeField('')}>
              清
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    killChooseLength: selector(state, 'killChoose').split(/[\n(\r\n)]/).filter(t => transOrigin(t).length === 3).length,
  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'killChoose', value),
  }, dispatch),
);

export default reduxHook(radium(KillChooseSection));
