// @flow

import React, { PureComponent } from 'react';
import { clipboard } from 'electron';
import radium from 'radium';
import {
  Field,
  change,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import ComposeButtonSet from './Elements/ComposeButtonSet';
import TextArea from './Form/TextArea.jsx';

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '12px 8px',
    margin: '4px 8px 0 8px',
    border: '1px solid #4a4a4a',
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '0 0 0 12px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 0 12px 0',
  },
  hint: {
    fontSize: 13,
    color: '#4a4a4a',
    margin: '0 0 12px 0',
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
}

class KeepFourSection extends PureComponent<Props> {
  render() {
    const {
      changeField,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <Field
          name="keepFour"
          component={TextArea} />
        <div style={styles.btnWrapper}>
          <span style={styles.title}>【出四码】</span>
          <ComposeButtonSet minLength={4} maxLength={11} formName="keepFour" />
          <p style={styles.hint}>
            点击4-11个号码，超过4个号时表示 出点击号码 的任意4码组合
          </p>
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
  () => ({

  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'keepFour', value),
  }, dispatch),
);

export default reduxHook(radium(KeepFourSection));
