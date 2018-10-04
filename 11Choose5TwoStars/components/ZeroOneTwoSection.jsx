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

class ZeroOneTwoSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZ', true);
    changeField('ZO', true);
    changeField('ZT', true);
    changeField('OZ', true);
    changeField('OO', true);
    changeField('OT', true);
    changeField('TZ', true);
    changeField('TO', true);
    changeField('TT', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZ', false);
    changeField('ZO', false);
    changeField('ZT', false);
    changeField('OZ', false);
    changeField('OO', false);
    changeField('OT', false);
    changeField('TZ', false);
    changeField('TO', false);
    changeField('TT', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀路数】</span>
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
            name="ZZ"
            label="00"
            component={CheckBox} />
          <Field
            name="ZO"
            label="01"
            component={CheckBox} />
          <Field
            name="ZT"
            label="02"
            component={CheckBox} />
          <Field
            name="OZ"
            label="10"
            component={CheckBox} />
          <Field
            name="OO"
            label="11"
            component={CheckBox} />
          <Field
            name="OT"
            label="12"
            component={CheckBox} />
          <Field
            name="TZ"
            label="20"
            component={CheckBox} />
          <Field
            name="TO"
            label="21"
            component={CheckBox} />
          <Field
            name="TT"
            label="22"
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

export default reduxHook(radium(ZeroOneTwoSection));
