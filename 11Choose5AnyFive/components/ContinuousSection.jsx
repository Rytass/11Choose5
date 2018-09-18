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
import BooleanButton from './Form/BooleanButton';

const styles = {
  wrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 8px 8px',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2px 0',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 4px 0 0',
  },
  button: {
    padding: '2px 16px',
    margin: '0 1px',
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
    margin: '0 2px 0 18px',
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

class ContinuousSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', true);
    changeField('twoContinuous', true);
    changeField('threeContinuous', true);
    changeField('fourContinuous', true);
    changeField('fiveContinuous', true);
    changeField('doubleTwoContinuous', true);
    changeField('twoContinuousThreeContinuous', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', false);
    changeField('twoContinuous', false);
    changeField('threeContinuous', false);
    changeField('fourContinuous', false);
    changeField('fiveContinuous', false);
    changeField('doubleTwoContinuous', false);
    changeField('twoContinuousThreeContinuous', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【相连号码】</span>
          <Field
            name="noContinuous"
            text="不连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="twoContinuous"
            text="二连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="threeContinuous"
            text="三连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="fourContinuous"
            text="四连"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="fiveContinuous"
            text="五连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="doubleTwoContinuous"
            text="两个二连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="twoContinuousThreeContinuous"
            text="二连加三连"
            buttonstyle={styles.button}
            component={BooleanButton} />
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

export default reduxHook(radium(ContinuousSection));
