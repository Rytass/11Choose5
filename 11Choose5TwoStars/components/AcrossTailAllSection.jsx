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
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 4px 8px 4px',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px 0',
  },
  formWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    width: 30,
    margin: '0 1px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 2px 0 0',
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

class AcrossTailAllSection extends PureComponent<Props> {
  acrossAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('acrossOne', true);
    changeField('acrossTwo', true);
    changeField('acrossThree', true);
    changeField('acrossFour', true);
    changeField('acrossFive', true);
    changeField('acrossSix', true);
    changeField('acrossSeven', true);
    changeField('acrossEight', true);
    changeField('acrossNine', true);
    changeField('acrossTen', true);
  }

  acrossClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('acrossOne', false);
    changeField('acrossTwo', false);
    changeField('acrossThree', false);
    changeField('acrossFour', false);
    changeField('acrossFive', false);
    changeField('acrossSix', false);
    changeField('acrossSeven', false);
    changeField('acrossEight', false);
    changeField('acrossNine', false);
    changeField('acrossTen', false);
  }

  tailAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('tailZero', true);
    changeField('tailOne', true);
    changeField('tailTwo', true);
    changeField('tailThree', true);
    changeField('tailFour', true);
    changeField('tailFive', true);
    changeField('tailSix', true);
    changeField('tailSeven', true);
    changeField('tailEight', true);
    changeField('tailNine', true);
  }

  tailClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('tailZero', false);
    changeField('tailOne', false);
    changeField('tailTwo', false);
    changeField('tailThree', false);
    changeField('tailFour', false);
    changeField('tailFive', false);
    changeField('tailSix', false);
    changeField('tailSeven', false);
    changeField('tailEight', false);
    changeField('tailNine', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀跨度】</span>
          <div style={styles.formWrapper}>
            <Field
              name="acrossOne"
              text="1"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossTwo"
              text="2"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossThree"
              text="3"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossFour"
              text="4"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossFive"
              text="5"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossSix"
              text="6"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossSeven"
              text="7"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossEight"
              text="8"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossNine"
              text="9"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="acrossTen"
              text="10"
              buttonstyle={styles.button}
              component={BooleanButton} />
          </div>
          <button
            type="button"
            key="acrossAll"
            onClick={() => this.acrossAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="acrossClear"
            onClick={() => this.acrossClearValue()}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀和尾】</span>
          <div style={styles.formWrapper}>
            <Field
              name="tailZero"
              text="0"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailOne"
              text="1"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailTwo"
              text="2"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailThree"
              text="3"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailFour"
              text="4"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailFive"
              text="5"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailSix"
              text="6"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailSeven"
              text="7"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailEight"
              text="8"
              buttonstyle={styles.button}
              component={BooleanButton} />
            <Field
              name="tailNine"
              text="9"
              buttonstyle={styles.button}
              component={BooleanButton} />
          </div>
          <button
            type="button"
            key="tailAll"
            onClick={() => this.tailAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="tailClear"
            onClick={() => this.tailClearValue()}
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

export default reduxHook(radium(AcrossTailAllSection));
