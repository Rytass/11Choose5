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

class PrimeCompositeSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ppp', false);
    changeField('ppc', false);
    changeField('pcp', false);
    changeField('pcc', false);
    changeField('ccc', false);
    changeField('ccp', false);
    changeField('cpc', false);
    changeField('cpp', false);
  }

  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ppp', true);
    changeField('ppc', true);
    changeField('pcp', true);
    changeField('pcc', true);
    changeField('ccc', true);
    changeField('ccp', true);
    changeField('cpc', true);
    changeField('cpp', true);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.formWrapper}>
          <Field
            name="ppp"
            label="质质质"
            component={CheckBox} />
          <Field
            name="ppc"
            label="质质合"
            component={CheckBox} />
          <Field
            name="pcp"
            label="质合质"
            component={CheckBox} />
          <Field
            name="pcc"
            label="质合合"
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
            name="ccc"
            label="合合合"
            component={CheckBox} />
          <Field
            name="ccp"
            label="合合质"
            component={CheckBox} />
          <Field
            name="cpc"
            label="合质合"
            component={CheckBox} />
          <Field
            name="cpp"
            label="合质质"
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

export default reduxHook(radium(PrimeCompositeSection));
