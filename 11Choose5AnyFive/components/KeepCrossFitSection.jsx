// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  FieldArray,
  change,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import BooleanButton from './Form/BooleanButton';
import CheckBox from './Form/CheckBox';
import KeepCrossFitFieldArray from './Form/KeepCrossFitFieldArray';

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
    width: 30,
    margin: '0 1px',
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 12px 0 0',
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 8px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: '0 20px 0 2px',
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
  countWeightWrapper: {
    margin: '0 0 0 12px',
  },
};

type Props = {
  changeField: Function,
}

class KeepCrossFitSection extends PureComponent<Props> {
  allValue(type) {
    const {
      changeField,
    } = this.props;

    if (type === 'keepTwoAcross') {
      changeField(`${type}Set`, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    } else {
      changeField(`${type}Set`, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    changeField(`${type}NumberZero`, true);
    changeField(`${type}NumberOne`, true);
    changeField(`${type}NumberTwo`, true);
    changeField(`${type}NumberThree`, true);
    changeField(`${type}NumberFour`, true);
    changeField(`${type}NumberFive`, true);
    changeField(`${type}NumberSix`, true);
    changeField(`${type}NumberSeven`, true);
    changeField(`${type}NumberEight`, true);
    changeField(`${type}NumberNine`, true);
    changeField(`${type}NumberTen`, true);
  }

  clearValue(type) {
    const {
      changeField,
    } = this.props;

    changeField(`${type}Set`, []);
    changeField(`${type}NumberZero`, false);
    changeField(`${type}NumberOne`, false);
    changeField(`${type}NumberTwo`, false);
    changeField(`${type}NumberThree`, false);
    changeField(`${type}NumberFour`, false);
    changeField(`${type}NumberFive`, false);
    changeField(`${type}NumberSix`, false);
    changeField(`${type}NumberSeven`, false);
    changeField(`${type}NumberEight`, false);
    changeField(`${type}NumberNine`, false);
    changeField(`${type}NumberTen`, false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>二码跨</span>
              <FieldArray
                name="keepTwoAcrossSet"
                noZero
                haveTen
                component={KeepCrossFitFieldArray} />
              <button
                type="button"
                key="keepTwoAcrossAll"
                onClick={() => this.allValue('keepTwoAcross')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="keepTwoAcrossClear"
                onClick={() => this.clearValue('keepTwoAcross')}
                style={styles.clearBtn}>
                清
              </button>
              <Field
                name="keepTwoAcrossNumberZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberSix"
                text="6"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberSeven"
                text="7"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberEight"
                text="8"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberNine"
                text="9"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoAcrossNumberTen"
                text="10"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.countWeightWrapper}>
                <Field
                  name="keepTwoAcrossCountWeight"
                  label="计重"
                  component={CheckBox} />
              </div>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>二码合</span>
              <FieldArray
                name="keepTwoFitSet"
                component={KeepCrossFitFieldArray} />
              <button
                type="button"
                key="keepTwoFitAll"
                onClick={() => this.allValue('keepTwoFit')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="keepTwoFitClear"
                onClick={() => this.clearValue('keepTwoFit')}
                style={styles.clearBtn}>
                清
              </button>
              <Field
                name="keepTwoFitNumberZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberSix"
                text="6"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberSeven"
                text="7"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberEight"
                text="8"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberNine"
                text="9"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoFitNumberTen"
                text="10"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.countWeightWrapper}>
                <Field
                  name="keepTwoFitCountWeight"
                  label="计重"
                  component={CheckBox} />
              </div>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>三码合</span>
              <FieldArray
                name="keepThreeFitSet"
                component={KeepCrossFitFieldArray} />
              <button
                type="button"
                key="keepThreeFitAll"
                onClick={() => this.allValue('keepThreeFit')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="keepThreeFitClear"
                onClick={() => this.clearValue('keepThreeFit')}
                style={styles.clearBtn}>
                清
              </button>
              <Field
                name="keepThreeFitNumberZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberSix"
                text="6"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberSeven"
                text="7"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberEight"
                text="8"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberNine"
                text="9"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepThreeFitNumberTen"
                text="10"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.countWeightWrapper}>
                <Field
                  name="keepThreeFitCountWeight"
                  label="计重"
                  component={CheckBox} />
              </div>
            </div>
            <div style={styles.lineWrapper}>
              <span style={styles.title}>四码合</span>
              <FieldArray
                name="keepFourFitSet"
                component={KeepCrossFitFieldArray} />
              <button
                type="button"
                key="keepFourFitAll"
                onClick={() => this.allValue('keepFourFit')}
                style={styles.allBtn}>
                全
              </button>
              <button
                type="button"
                key="keepFourFitClear"
                onClick={() => this.clearValue('keepFourFit')}
                style={styles.clearBtn}>
                清
              </button>
              <Field
                name="keepFourFitNumberZero"
                text="0"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepFourFitNumberOne"
                text="1"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepFourFitNumberTwo"
                text="2"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepFourFitNumberThree"
                text="3"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepFourFitNumberFour"
                text="4"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepFourFitNumberFive"
                text="5"
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.button} />
              <div style={styles.button} />
              <div style={styles.button} />
              <div style={styles.button} />
              <div style={styles.button} />
              <div style={styles.countWeightWrapper}>
                <Field
                  name="keepFourFitCountWeight"
                  label="计重"
                  component={CheckBox} />
              </div>
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

export default reduxHook(radium(KeepCrossFitSection));
