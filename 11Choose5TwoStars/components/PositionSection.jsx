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
    margin: '4px 4px 8px 4px',
  },
  titleWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 8px 0',
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

class PositionSection extends PureComponent<Props> {
  allValue(rank) {
    const {
      changeField,
    } = this.props;

    changeField(`${rank}One`, true);
    changeField(`${rank}Two`, true);
    changeField(`${rank}Three`, true);
    changeField(`${rank}Four`, true);
    changeField(`${rank}Five`, true);
    changeField(`${rank}Six`, true);
    changeField(`${rank}Seven`, true);
    changeField(`${rank}Eight`, true);
    changeField(`${rank}Nine`, true);
    changeField(`${rank}Ten`, true);
    changeField(`${rank}Eleven`, true);
  }

  clearValue(rank) {
    const {
      changeField,
    } = this.props;

    changeField(`${rank}One`, false);
    changeField(`${rank}Two`, false);
    changeField(`${rank}Three`, false);
    changeField(`${rank}Four`, false);
    changeField(`${rank}Five`, false);
    changeField(`${rank}Six`, false);
    changeField(`${rank}Seven`, false);
    changeField(`${rank}Eight`, false);
    changeField(`${rank}Nine`, false);
    changeField(`${rank}Ten`, false);
    changeField(`${rank}Eleven`, false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleWrapper}>
          <span style={styles.title}>【定位杀】</span>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【第一名】</span>
          <Field
            name="firstOne"
            text="01"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstTwo"
            text="02"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstThree"
            text="03"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstFour"
            text="04"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstFive"
            text="05"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstSix"
            text="06"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstSeven"
            text="07"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstEight"
            text="08"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstNine"
            text="09"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstTen"
            text="10"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="firstEleven"
            text="11"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="firstAll"
            onClick={() => this.allValue('first')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="firstClear"
            onClick={() => this.clearValue('first')}
            style={styles.clearBtn}>
            清
          </button>
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【第二名】</span>
          <Field
            name="secondOne"
            text="01"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondTwo"
            text="02"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondThree"
            text="03"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondFour"
            text="04"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondFive"
            text="05"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondSix"
            text="06"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondSeven"
            text="07"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondEight"
            text="08"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondNine"
            text="09"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondTen"
            text="10"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="secondEleven"
            text="11"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <button
            type="button"
            key="secondAll"
            onClick={() => this.allValue('second')}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="secondClear"
            onClick={() => this.clearValue('second')}
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

export default reduxHook(radium(PositionSection));
