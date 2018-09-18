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
    width: 25,
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
    margin: '0 2px 0 24px',
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

class MaxMinSection extends PureComponent<Props> {
  maxAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('maxFive', true);
    changeField('maxSix', true);
    changeField('maxSeven', true);
    changeField('maxEight', true);
    changeField('maxNine', true);
    changeField('maxTen', true);
    changeField('maxEleven', true);
  }

  maxClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('maxFive', false);
    changeField('maxSix', false);
    changeField('maxSeven', false);
    changeField('maxEight', false);
    changeField('maxNine', false);
    changeField('maxTen', false);
    changeField('maxEleven', false);
  }

  minAllValue() {
    const {
      changeField,
    } = this.props;

    changeField('minOne', true);
    changeField('minTwo', true);
    changeField('minThree', true);
    changeField('minFour', true);
    changeField('minFive', true);
    changeField('minSix', true);
    changeField('minSeven', true);
  }

  minClearValue() {
    const {
      changeField,
    } = this.props;

    changeField('minOne', false);
    changeField('minTwo', false);
    changeField('minThree', false);
    changeField('minFour', false);
    changeField('minFive', false);
    changeField('minSix', false);
    changeField('minSeven', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【最小号码】</span>
          <Field
            name="minOne"
            text="01"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minTwo"
            text="02"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minThree"
            text="03"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minFour"
            text="04"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minFive"
            text="05"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minSix"
            text="06"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="minSeven"
            text="07"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="minAll"
            onClick={() => this.minAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="minClear"
            onClick={() => this.minClearValue()}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【最大号码】</span>
          <Field
            name="maxFive"
            text="05"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxSix"
            text="06"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxSeven"
            text="07"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxEight"
            text="08"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxNine"
            text="09"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxTen"
            text="10"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="maxEleven"
            text="11"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="maxAll"
            onClick={() => this.maxAllValue()}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="maxClear"
            onClick={() => this.maxClearValue()}
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

export default reduxHook(radium(MaxMinSection));
