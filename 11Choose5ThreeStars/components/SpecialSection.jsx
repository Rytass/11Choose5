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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 4,
    border: '1px solid #4a4a4a',
    margin: '4px 4px 8px 4px',
  },
  formWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px 0',
  },
  button: {
    width: 40,
    height: 30,
    margin: 1,
  },
  clearBtn: {
    flex: 1,
    width: 40,
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: 1,
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

class SpecialSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', false);
    changeField('twoContinuous', false);
    changeField('threeContinuous', false);
    changeField('uphill', false);
    changeField('downhill', false);
    changeField('convex', false);
    changeField('concave', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.formWrapper}>
          <Field
            name="noContinuous"
            text="不连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="uphill"
            text="上山"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="convex"
            text="凸型"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.formWrapper}>
          <Field
            name="twoContinuous"
            text="二连"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="downhill"
            text="下山"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="concave"
            text="凹型"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.formWrapper}>
          <Field
            name="threeContinuous"
            text="三连"
            buttonstyle={styles.button}
            component={BooleanButton} />
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

export default reduxHook(radium(SpecialSection));
