// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  change,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import CheckBox from './Form/CheckBox';
import BigDefinitionForm from './Form/BigDefinitionForm';

const styles = {
  wrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 0 8px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 4px 0 0',
  },
  defineWrapper: {
    display: 'flex',
  },
  lineWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
  },
  allBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: 2,
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: 2,
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

class KillTypeSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('bb', true);
    changeField('bs', true);
    changeField('ss', true);
    changeField('sb', true);
    changeField('oo', true);
    changeField('oe', true);
    changeField('eo', true);
    changeField('ee', true);
    changeField('pp', true);
    changeField('pc', true);
    changeField('cp', true);
    changeField('cc', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('bb', false);
    changeField('bs', false);
    changeField('ss', false);
    changeField('sb', false);
    changeField('oo', false);
    changeField('oe', false);
    changeField('eo', false);
    changeField('ee', false);
    changeField('pp', false);
    changeField('pc', false);
    changeField('cp', false);
    changeField('cc', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀型态】</span>
          <div style={styles.defineWrapper}>
            <span style={styles.title}>大号定义</span>
            <Field
              name="bigDefinition"
              component={BigDefinitionForm} />
          </div>
          <div>
            <button
              type="button"
              key="all"
              onClick={() => this.allValue()}
              style={styles.allBtn}>
              全
            </button>
            <button
              type="button"
              key="clear"
              onClick={() => this.clearValue()}
              style={styles.clearBtn}>
              清
            </button>
          </div>
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="bb"
            label="大大"
            component={CheckBox} />
          <Field
            name="bs"
            label="大小"
            component={CheckBox} />
          <Field
            name="oo"
            label="奇奇"
            component={CheckBox} />
          <Field
            name="oe"
            label="奇偶"
            component={CheckBox} />
          <Field
            name="pp"
            label="质质"
            component={CheckBox} />
          <Field
            name="pc"
            label="质合"
            component={CheckBox} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="ss"
            label="小小"
            component={CheckBox} />
          <Field
            name="sb"
            label="小大"
            component={CheckBox} />
          <Field
            name="ee"
            label="偶偶"
            component={CheckBox} />
          <Field
            name="eo"
            label="偶奇"
            component={CheckBox} />
          <Field
            name="cc"
            label="合合"
            component={CheckBox} />
          <Field
            name="cp"
            label="合质"
            component={CheckBox} />
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  () => ({

  }),
  dispatch => bindActionCreators({
    changeField: (field, value) => change(MAIN_FORM, field, value),
  }, dispatch),
);

export default reduxHook(radium(KillTypeSection));
