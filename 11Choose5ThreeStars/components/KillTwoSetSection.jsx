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

class KillTwoSetSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('killTwoSetOneTwo', true);
    changeField('killTwoSetOneThree', true);
    changeField('killTwoSetOneFour', true);
    changeField('killTwoSetOneFive', true);
    changeField('killTwoSetOneSix', true);
    changeField('killTwoSetOneSeven', true);
    changeField('killTwoSetOneEight', true);
    changeField('killTwoSetOneNine', true);
    changeField('killTwoSetOneTen', true);
    changeField('killTwoSetOneEleven', true);
    changeField('killTwoSetTwoThree', true);
    changeField('killTwoSetTwoFour', true);
    changeField('killTwoSetTwoFive', true);
    changeField('killTwoSetTwoSix', true);
    changeField('killTwoSetTwoSeven', true);
    changeField('killTwoSetTwoEight', true);
    changeField('killTwoSetTwoNine', true);
    changeField('killTwoSetTwoTen', true);
    changeField('killTwoSetTwoEleven', true);
    changeField('killTwoSetThreeFour', true);
    changeField('killTwoSetThreeFive', true);
    changeField('killTwoSetThreeSix', true);
    changeField('killTwoSetThreeSeven', true);
    changeField('killTwoSetThreeEight', true);
    changeField('killTwoSetThreeNine', true);
    changeField('killTwoSetThreeTen', true);
    changeField('killTwoSetThreeEleven', true);
    changeField('killTwoSetFourFive', true);
    changeField('killTwoSetFourSix', true);
    changeField('killTwoSetFourSeven', true);
    changeField('killTwoSetFourEight', true);
    changeField('killTwoSetFourNine', true);
    changeField('killTwoSetFourTen', true);
    changeField('killTwoSetFourEleven', true);
    changeField('killTwoSetFiveSix', true);
    changeField('killTwoSetFiveSeven', true);
    changeField('killTwoSetFiveEight', true);
    changeField('killTwoSetFiveNine', true);
    changeField('killTwoSetFiveTen', true);
    changeField('killTwoSetFiveEleven', true);
    changeField('killTwoSetSixSeven', true);
    changeField('killTwoSetSixEight', true);
    changeField('killTwoSetSixNine', true);
    changeField('killTwoSetSixTen', true);
    changeField('killTwoSetSixEleven', true);
    changeField('killTwoSetSevenEight', true);
    changeField('killTwoSetSevenNine', true);
    changeField('killTwoSetSevenTen', true);
    changeField('killTwoSetSevenEleven', true);
    changeField('killTwoSetEightNine', true);
    changeField('killTwoSetEightTen', true);
    changeField('killTwoSetEightEleven', true);
    changeField('killTwoSetNineTen', true);
    changeField('killTwoSetNineEleven', true);
    changeField('killTwoSetTenEleven', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('killTwoSetOneTwo', false);
    changeField('killTwoSetOneThree', false);
    changeField('killTwoSetOneFour', false);
    changeField('killTwoSetOneFive', false);
    changeField('killTwoSetOneSix', false);
    changeField('killTwoSetOneSeven', false);
    changeField('killTwoSetOneEight', false);
    changeField('killTwoSetOneNine', false);
    changeField('killTwoSetOneTen', false);
    changeField('killTwoSetOneEleven', false);
    changeField('killTwoSetTwoThree', false);
    changeField('killTwoSetTwoFour', false);
    changeField('killTwoSetTwoFive', false);
    changeField('killTwoSetTwoSix', false);
    changeField('killTwoSetTwoSeven', false);
    changeField('killTwoSetTwoEight', false);
    changeField('killTwoSetTwoNine', false);
    changeField('killTwoSetTwoTen', false);
    changeField('killTwoSetTwoEleven', false);
    changeField('killTwoSetThreeFour', false);
    changeField('killTwoSetThreeFive', false);
    changeField('killTwoSetThreeSix', false);
    changeField('killTwoSetThreeSeven', false);
    changeField('killTwoSetThreeEight', false);
    changeField('killTwoSetThreeNine', false);
    changeField('killTwoSetThreeTen', false);
    changeField('killTwoSetThreeEleven', false);
    changeField('killTwoSetFourFive', false);
    changeField('killTwoSetFourSix', false);
    changeField('killTwoSetFourSeven', false);
    changeField('killTwoSetFourEight', false);
    changeField('killTwoSetFourNine', false);
    changeField('killTwoSetFourTen', false);
    changeField('killTwoSetFourEleven', false);
    changeField('killTwoSetFiveSix', false);
    changeField('killTwoSetFiveSeven', false);
    changeField('killTwoSetFiveEight', false);
    changeField('killTwoSetFiveNine', false);
    changeField('killTwoSetFiveTen', false);
    changeField('killTwoSetFiveEleven', false);
    changeField('killTwoSetSixSeven', false);
    changeField('killTwoSetSixEight', false);
    changeField('killTwoSetSixNine', false);
    changeField('killTwoSetSixTen', false);
    changeField('killTwoSetSixEleven', false);
    changeField('killTwoSetSevenEight', false);
    changeField('killTwoSetSevenNine', false);
    changeField('killTwoSetSevenTen', false);
    changeField('killTwoSetSevenEleven', false);
    changeField('killTwoSetEightNine', false);
    changeField('killTwoSetEightTen', false);
    changeField('killTwoSetEightEleven', false);
    changeField('killTwoSetNineTen', false);
    changeField('killTwoSetNineEleven', false);
    changeField('killTwoSetTenEleven', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀二码】</span>
        </div>
        <div style={styles.main}>
          <div style={styles.fieldWrapper}>
            <div style={styles.lineWrapper}>
              <Field
                name="killTwoSetOneTwo"
                text={'01\n02'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneThree"
                text={'01\n03'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneFour"
                text={'01\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneFive"
                text={'01\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneSix"
                text={'01\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneSeven"
                text={'01\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneEight"
                text={'01\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneNine"
                text={'01\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneTen"
                text={'01\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetOneEleven"
                text={'01\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoThree"
                text={'02\n03'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoFour"
                text={'02\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoFive"
                text={'02\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoSix"
                text={'02\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoSeven"
                text={'02\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoEight"
                text={'02\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoNine"
                text={'02\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoTen"
                text={'02\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTwoEleven"
                text={'02\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeFour"
                text={'03\n04'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeFive"
                text={'03\n05'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeSix"
                text={'03\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeSeven"
                text={'03\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeEight"
                text={'03\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeNine"
                text={'03\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeTen"
                text={'03\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetThreeEleven"
                text={'03\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourFive"
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
                name="killTwoSetFourSix"
                text={'04\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourSeven"
                text={'04\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourEight"
                text={'04\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourNine"
                text={'04\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourTen"
                text={'04\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFourEleven"
                text={'04\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveSix"
                text={'05\n06'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveSeven"
                text={'05\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveEight"
                text={'05\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveNine"
                text={'05\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveTen"
                text={'05\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetFiveEleven"
                text={'05\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSixSeven"
                text={'06\n07'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSixEight"
                text={'06\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSixNine"
                text={'06\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSixTen"
                text={'06\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSixEleven"
                text={'06\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSevenEight"
                text={'07\n08'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSevenNine"
                text={'07\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSevenTen"
                text={'07\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetSevenEleven"
                text={'07\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetEightNine"
                text={'08\n09'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetEightTen"
                text={'08\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetEightEleven"
                text={'08\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetNineTen"
                text={'09\n10'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetNineEleven"
                text={'09\n11'}
                buttonstyle={styles.button}
                component={BooleanButton} />
              <Field
                name="killTwoSetTenEleven"
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

export default reduxHook(radium(KillTwoSetSection));
