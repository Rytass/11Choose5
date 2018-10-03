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
    margin: '4px 8px 0 8px',
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

class BigSmallSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbb', false);
    changeField('bbs', false);
    changeField('bsb', false);
    changeField('bss', false);
    changeField('sss', false);
    changeField('ssb', false);
    changeField('sbs', false);
    changeField('sbb', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('bbb', true);
    changeField('bbs', true);
    changeField('bsb', true);
    changeField('bss', true);
    changeField('sss', true);
    changeField('ssb', true);
    changeField('sbs', true);
    changeField('sbb', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.formWrapper}>
          <Field
            name="bbb"
            label="大大大"
            component={CheckBox} />
          <Field
            name="bbs"
            label="大大小"
            component={CheckBox} />
          <Field
            name="bsb"
            label="大小大"
            component={CheckBox} />
          <Field
            name="bss"
            label="大小小"
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
            name="sss"
            label="小小小"
            component={CheckBox} />
          <Field
            name="ssb"
            label="小小大"
            component={CheckBox} />
          <Field
            name="sbs"
            label="小大小"
            component={CheckBox} />
          <Field
            name="sbb"
            label="小大大"
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

export default reduxHook(radium(BigSmallSection));
