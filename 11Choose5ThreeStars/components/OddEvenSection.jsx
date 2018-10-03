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
    justifyContent: 'flex-start',
    padding: 4,
    border: '1px solid #4a4a4a',
    margin: '4px 4px 0 4px',
  },
  formWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2px 0',
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 2px',
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  allBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 2px',
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

class OddEvenSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ooo', false);
    changeField('ooe', false);
    changeField('oeo', false);
    changeField('oee', false);
    changeField('eee', false);
    changeField('eeo', false);
    changeField('eoe', false);
    changeField('eoo', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ooo', true);
    changeField('ooe', true);
    changeField('oeo', true);
    changeField('oee', true);
    changeField('eee', true);
    changeField('eeo', true);
    changeField('eoe', true);
    changeField('eoo', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.formWrapper}>
          <Field
            name="ooo"
            label="奇奇奇"
            component={CheckBox} />
          <Field
            name="ooe"
            label="奇奇偶"
            component={CheckBox} />
          <Field
            name="oeo"
            label="奇偶奇"
            component={CheckBox} />
          <Field
            name="oee"
            label="奇偶偶"
            component={CheckBox} />
          <button
            type="button"
            key="all"
            onClick={() => this.allValue()}
            style={styles.allBtn}>
            全
          </button>
        </div>
        <div style={styles.formWrapper}>
          <Field
            name="eee"
            label="偶偶偶"
            component={CheckBox} />
          <Field
            name="eeo"
            label="偶偶奇"
            component={CheckBox} />
          <Field
            name="eoe"
            label="偶奇偶"
            component={CheckBox} />
          <Field
            name="eoo"
            label="偶奇奇"
            component={CheckBox} />
          <button
            type="button"
            key="clear"
            onClick={() => this.clearValue()}
            style={styles.clearBtn}>
            清
          </button>
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

export default reduxHook(radium(OddEvenSection));
