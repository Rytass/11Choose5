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
  button: {
    width: 30,
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

class KillSumSection extends PureComponent<Props> {
  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('killSumFifteen', false);
    changeField('killSumSixteen', false);
    changeField('killSumSeventeen', false);
    changeField('killSumEighteen', false);
    changeField('killSumNineteen', false);
    changeField('killSumTwenty', false);
    changeField('killSumTwentyOne', false);
    changeField('killSumTwentyTwo', false);
    changeField('killSumTwentyThree', false);
    changeField('killSumTwentyFour', false);
    changeField('killSumTwentyFive', false);
    changeField('killSumTwentySix', false);
    changeField('killSumTwentySeven', false);
    changeField('killSumTwentyEight', false);
    changeField('killSumTwentyNine', false);
    changeField('killSumThirty', false);
    changeField('killSumThirtyOne', false);
    changeField('killSumThirtyTwo', false);
    changeField('killSumThirtyThree', false);
    changeField('killSumThirtyFour', false);
    changeField('killSumThirtyFive', false);
    changeField('killSumThirtySix', false);
    changeField('killSumThirtySeven', false);
    changeField('killSumThirtyEight', false);
    changeField('killSumThirtyNine', false);
    changeField('killSumFourty', false);
    changeField('killSumFourtyOne', false);
    changeField('killSumFourtyTwo', false);
    changeField('killSumFourtyThree', false);
    changeField('killSumFourtyFour', false);
    changeField('killSumFourtyFive', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【杀和值】</span>
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="killSumFifteen"
            text="15"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumSixteen"
            text="16"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumSeventeen"
            text="17"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumEighteen"
            text="18"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumNineteen"
            text="19"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwenty"
            text="20"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyOne"
            text="21"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyTwo"
            text="22"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyThree"
            text="23"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyFour"
            text="24"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyFive"
            text="25"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentySix"
            text="26"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentySeven"
            text="27"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyEight"
            text="28"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumTwentyNine"
            text="29"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirty"
            text="30"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.lineWrapper}>
          <Field
            name="killSumThirtyOne"
            text="31"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyTwo"
            text="32"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyThree"
            text="33"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyFour"
            text="34"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyFive"
            text="35"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtySix"
            text="36"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtySeven"
            text="37"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyEight"
            text="38"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumThirtyNine"
            text="39"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourty"
            text="40"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourtyOne"
            text="41"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourtyTwo"
            text="42"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourtyThree"
            text="43"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourtyFour"
            text="44"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="killSumFourtyFive"
            text="45"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <div style={styles.button} />
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

export default reduxHook(radium(KillSumSection));
