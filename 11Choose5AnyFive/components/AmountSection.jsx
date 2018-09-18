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
    margin: '4px 8px 8px 8px',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px 0',
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

class AmountSection extends PureComponent<Props> {
  allValue(type) {
    const {
      changeField,
    } = this.props;

    changeField(`${type}Zero`, true);
    changeField(`${type}One`, true);
    changeField(`${type}Two`, true);
    changeField(`${type}Three`, true);
    changeField(`${type}Four`, true);
    changeField(`${type}Five`, true);
  }

  clearValue(type) {
    const {
      changeField,
    } = this.props;

    changeField(`${type}Zero`, false);
    changeField(`${type}One`, false);
    changeField(`${type}Two`, false);
    changeField(`${type}Three`, false);
    changeField(`${type}Four`, false);
    changeField(`${type}Five`, false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【大号定义】</span>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【大号个数】</span>
          <Field
            name="bigZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="bigAll"
            onClick={() => this.allValue('big')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="bigClear"
            onClick={() => this.clearValue('big')}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【奇号个数】</span>
          <Field
            name="oddZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="oddAll"
            onClick={() => this.allValue('odd')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="oddClear"
            onClick={() => this.clearValue('odd')}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【质号个数】</span>
          <Field
            name="primeZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="primeOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="primeTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="primeThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="primeFour"
            text="4"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="primeFive"
            text="5"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="primeAll"
            onClick={() => this.allValue('prime')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="primeClear"
            onClick={() => this.clearValue('prime')}
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

export default reduxHook(radium(AmountSection));
