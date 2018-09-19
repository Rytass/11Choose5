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
    margin: '4px 8px 0 8px',
  },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fieldWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px 0',
  },
  button: {
    width: 45,
    margin: '0 1px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 12px 0 0',
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
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
    padding: '0 16px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 2px 0 20px',
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

class TypeSection extends PureComponent<Props> {
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
          <span style={styles.title}>【型态个数】</span>
        </div>
        <div style={styles.main}>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>大号数</span>
              <Field
                name="bigTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="bigTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="bigTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="bigTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="bigTypeFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="bigTypeFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="bigAll"
                onClick={() => this.allValue('bigType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="bigClear"
                onClick={() => this.clearValue('bigType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>奇号数</span>
              <Field
                name="oddTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oddTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oddTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oddTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oddTypeFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oddTypeFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="oddAll"
                onClick={() => this.allValue('oddType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="oddClear"
                onClick={() => this.clearValue('oddType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>质号数</span>
              <Field
                name="primeTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="primeTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="primeTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="primeTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="primeTypeFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="primeTypeFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="primeAll"
                onClick={() => this.allValue('primeType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="primeClear"
                onClick={() => this.clearValue('primeType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
          </div>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>0路个数</span>
              <Field
                name="zeroLoadTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="zeroLoadTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="zeroLoadTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="zeroLoadTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.button} />
              <button
                type="button"
                key="zeroLoadAll"
                onClick={() => this.allValue('zeroLoadType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="zeroLoadClear"
                onClick={() => this.clearValue('zeroLoadType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>1路个数</span>
              <Field
                name="oneLoadTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oneLoadTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oneLoadTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oneLoadTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="oneLoadTypeFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="oneLoadAll"
                onClick={() => this.allValue('oneLoadType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="oneLoadClear"
                onClick={() => this.clearValue('oneLoadType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>2路个数</span>
              <Field
                name="twoLoadTypeZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="twoLoadTypeOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="twoLoadTypeTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="twoLoadTypeThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="twoLoadTypeFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="twoLoadAll"
                onClick={() => this.allValue('twoLoadType')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="twoLoadClear"
                onClick={() => this.clearValue('twoLoadType')}
                style={styles.clearBtn}>
                清
              </button>
            </div>
          </div>
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

export default reduxHook(radium(TypeSection));
