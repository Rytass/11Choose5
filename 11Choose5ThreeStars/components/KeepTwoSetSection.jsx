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
    width: 29,
    margin: '0 1px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 12px 0 0',
  },
  clearBtn: {
    alignSelf: 'stretch',
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
  allBtn: {
    alignSelf: 'stretch',
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
};

type Props = {
  changeField: Function,
}

class KeepTwoSetSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('keepTwoSetOneTwo', true);
    changeField('keepTwoSetOneThree', true);
    changeField('keepTwoSetOneFour', true);
    changeField('keepTwoSetOneFive', true);
    changeField('keepTwoSetOneSix', true);
    changeField('keepTwoSetOneSeven', true);
    changeField('keepTwoSetOneEight', true);
    changeField('keepTwoSetOneNine', true);
    changeField('keepTwoSetOneTen', true);
    changeField('keepTwoSetOneEleven', true);
    changeField('keepTwoSetTwoThree', true);
    changeField('keepTwoSetTwoFour', true);
    changeField('keepTwoSetTwoFive', true);
    changeField('keepTwoSetTwoSix', true);
    changeField('keepTwoSetTwoSeven', true);
    changeField('keepTwoSetTwoEight', true);
    changeField('keepTwoSetTwoNine', true);
    changeField('keepTwoSetTwoTen', true);
    changeField('keepTwoSetTwoEleven', true);
    changeField('keepTwoSetThreeFour', true);
    changeField('keepTwoSetThreeFive', true);
    changeField('keepTwoSetThreeSix', true);
    changeField('keepTwoSetThreeSeven', true);
    changeField('keepTwoSetThreeEight', true);
    changeField('keepTwoSetThreeNine', true);
    changeField('keepTwoSetThreeTen', true);
    changeField('keepTwoSetThreeEleven', true);
    changeField('keepTwoSetFourFive', true);
    changeField('keepTwoSetFourSix', true);
    changeField('keepTwoSetFourSeven', true);
    changeField('keepTwoSetFourEight', true);
    changeField('keepTwoSetFourNine', true);
    changeField('keepTwoSetFourTen', true);
    changeField('keepTwoSetFourEleven', true);
    changeField('keepTwoSetFiveSix', true);
    changeField('keepTwoSetFiveSeven', true);
    changeField('keepTwoSetFiveEight', true);
    changeField('keepTwoSetFiveNine', true);
    changeField('keepTwoSetFiveTen', true);
    changeField('keepTwoSetFiveEleven', true);
    changeField('keepTwoSetSixSeven', true);
    changeField('keepTwoSetSixEight', true);
    changeField('keepTwoSetSixNine', true);
    changeField('keepTwoSetSixTen', true);
    changeField('keepTwoSetSixEleven', true);
    changeField('keepTwoSetSevenEight', true);
    changeField('keepTwoSetSevenNine', true);
    changeField('keepTwoSetSevenTen', true);
    changeField('keepTwoSetSevenEleven', true);
    changeField('keepTwoSetEightNine', true);
    changeField('keepTwoSetEightTen', true);
    changeField('keepTwoSetEightEleven', true);
    changeField('keepTwoSetNineTen', true);
    changeField('keepTwoSetNineEleven', true);
    changeField('keepTwoSetTenEleven', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('keepTwoSetOneTwo', false);
    changeField('keepTwoSetOneThree', false);
    changeField('keepTwoSetOneFour', false);
    changeField('keepTwoSetOneFive', false);
    changeField('keepTwoSetOneSix', false);
    changeField('keepTwoSetOneSeven', false);
    changeField('keepTwoSetOneEight', false);
    changeField('keepTwoSetOneNine', false);
    changeField('keepTwoSetOneTen', false);
    changeField('keepTwoSetOneEleven', false);
    changeField('keepTwoSetTwoThree', false);
    changeField('keepTwoSetTwoFour', false);
    changeField('keepTwoSetTwoFive', false);
    changeField('keepTwoSetTwoSix', false);
    changeField('keepTwoSetTwoSeven', false);
    changeField('keepTwoSetTwoEight', false);
    changeField('keepTwoSetTwoNine', false);
    changeField('keepTwoSetTwoTen', false);
    changeField('keepTwoSetTwoEleven', false);
    changeField('keepTwoSetThreeFour', false);
    changeField('keepTwoSetThreeFive', false);
    changeField('keepTwoSetThreeSix', false);
    changeField('keepTwoSetThreeSeven', false);
    changeField('keepTwoSetThreeEight', false);
    changeField('keepTwoSetThreeNine', false);
    changeField('keepTwoSetThreeTen', false);
    changeField('keepTwoSetThreeEleven', false);
    changeField('keepTwoSetFourFive', false);
    changeField('keepTwoSetFourSix', false);
    changeField('keepTwoSetFourSeven', false);
    changeField('keepTwoSetFourEight', false);
    changeField('keepTwoSetFourNine', false);
    changeField('keepTwoSetFourTen', false);
    changeField('keepTwoSetFourEleven', false);
    changeField('keepTwoSetFiveSix', false);
    changeField('keepTwoSetFiveSeven', false);
    changeField('keepTwoSetFiveEight', false);
    changeField('keepTwoSetFiveNine', false);
    changeField('keepTwoSetFiveTen', false);
    changeField('keepTwoSetFiveEleven', false);
    changeField('keepTwoSetSixSeven', false);
    changeField('keepTwoSetSixEight', false);
    changeField('keepTwoSetSixNine', false);
    changeField('keepTwoSetSixTen', false);
    changeField('keepTwoSetSixEleven', false);
    changeField('keepTwoSetSevenEight', false);
    changeField('keepTwoSetSevenNine', false);
    changeField('keepTwoSetSevenTen', false);
    changeField('keepTwoSetSevenEleven', false);
    changeField('keepTwoSetEightNine', false);
    changeField('keepTwoSetEightTen', false);
    changeField('keepTwoSetEightEleven', false);
    changeField('keepTwoSetNineTen', false);
    changeField('keepTwoSetNineEleven', false);
    changeField('keepTwoSetTenEleven', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【出二码】</span>
        </div>
        <div style={styles.main}>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <Field
                name="keepTwoSetOneTwo"
                text={'01\n02'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneThree"
                text={'01\n03'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneFour"
                text={'01\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneFive"
                text={'01\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneSix"
                text={'01\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneSeven"
                text={'01\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneEight"
                text={'01\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneNine"
                text={'01\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneTen"
                text={'01\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetOneEleven"
                text={'01\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoThree"
                text={'02\n03'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoFour"
                text={'02\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoFive"
                text={'02\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoSix"
                text={'02\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoSeven"
                text={'02\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoEight"
                text={'02\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoNine"
                text={'02\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoTen"
                text={'02\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTwoEleven"
                text={'02\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeFour"
                text={'03\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeFive"
                text={'03\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeSix"
                text={'03\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeSeven"
                text={'03\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeEight"
                text={'03\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeNine"
                text={'03\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeTen"
                text={'03\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetThreeEleven"
                text={'03\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourFive"
                text={'04\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <button
                type="button"
                key="all"
                onClick={() => this.allValue()}
                style={styles.allBtn}>
                全选
              </button>
            </div>
            <div style={styles.lineWrapper}>
              <Field
                name="keepTwoSetFourSix"
                text={'04\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourSeven"
                text={'04\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourEight"
                text={'04\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourNine"
                text={'04\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourTen"
                text={'04\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFourEleven"
                text={'04\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveSix"
                text={'05\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveSeven"
                text={'05\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveEight"
                text={'05\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveNine"
                text={'05\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveTen"
                text={'05\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetFiveEleven"
                text={'05\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSixSeven"
                text={'06\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSixEight"
                text={'06\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSixNine"
                text={'06\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSixTen"
                text={'06\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSixEleven"
                text={'06\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSevenEight"
                text={'07\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSevenNine"
                text={'07\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSevenTen"
                text={'07\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetSevenEleven"
                text={'07\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetEightNine"
                text={'08\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetEightTen"
                text={'08\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetEightEleven"
                text={'08\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetNineTen"
                text={'09\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetNineEleven"
                text={'09\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="keepTwoSetTenEleven"
                text={'10\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <div style={styles.button} />
              <button
                type="button"
                key="clear"
                onClick={() => this.clearValue()}
                style={styles.clearBtn}>
                清空
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

export default reduxHook(radium(KeepTwoSetSection));
