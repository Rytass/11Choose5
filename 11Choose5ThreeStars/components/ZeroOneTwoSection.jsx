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
import CheckBox from './Form/CheckBox';

const styles = {
  wrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 8px 0 8px',
  },
  sectionWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 0 12px',
  },
  lineWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
  },
  allBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: 2,
    color: '#4a4a4a',
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '0 16px',
    backgroundColor: '#f2f2f2',
    fontSize: 13,
    letterSpacing: 1,
    margin: 2,
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

class ZeroOneTwoSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZZ', true);
    changeField('ZZO', true);
    changeField('ZZT', true);
    changeField('ZOZ', true);
    changeField('ZOO', true);
    changeField('ZOT', true);
    changeField('ZTZ', true);
    changeField('ZTO', true);
    changeField('ZTT', true);
    changeField('OZZ', true);
    changeField('OZO', true);
    changeField('OZT', true);
    changeField('OOZ', true);
    changeField('OOO', true);
    changeField('OOT', true);
    changeField('OTZ', true);
    changeField('OTO', true);
    changeField('OTT', true);
    changeField('TZZ', true);
    changeField('TZO', true);
    changeField('TZT', true);
    changeField('TOZ', true);
    changeField('TOO', true);
    changeField('TOT', true);
    changeField('TTZ', true);
    changeField('TTO', true);
    changeField('TTT', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('ZZZ', false);
    changeField('ZZO', false);
    changeField('ZZT', false);
    changeField('ZOZ', false);
    changeField('ZOO', false);
    changeField('ZOT', false);
    changeField('ZTZ', false);
    changeField('ZTO', false);
    changeField('ZTT', false);
    changeField('OZZ', false);
    changeField('OZO', false);
    changeField('OZT', false);
    changeField('OOZ', false);
    changeField('OOO', false);
    changeField('OOT', false);
    changeField('OTZ', false);
    changeField('OTO', false);
    changeField('OTT', false);
    changeField('TZZ', false);
    changeField('TZO', false);
    changeField('TZT', false);
    changeField('TOZ', false);
    changeField('TOO', false);
    changeField('TOT', false);
    changeField('TTZ', false);
    changeField('TTO', false);
    changeField('TTT', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.sectionWrapper}>
          <div style={styles.lineWrapper}>
            <Field
              name="ZZZ"
              label="000"
              component={CheckBox} />
            <Field
              name="ZZO"
              label="001"
              component={CheckBox} />
            <Field
              name="ZZT"
              label="002"
              component={CheckBox} />
            <Field
              name="ZOZ"
              label="010"
              component={CheckBox} />
            <Field
              name="ZOO"
              label="011"
              component={CheckBox} />
            <Field
              name="ZOT"
              label="012"
              component={CheckBox} />
            <Field
              name="ZTZ"
              label="020"
              component={CheckBox} />
            <Field
              name="ZTO"
              label="021"
              component={CheckBox} />
            <Field
              name="ZTT"
              label="022"
              component={CheckBox} />
          </div>
          <div style={styles.lineWrapper}>
            <Field
              name="OZZ"
              label="100"
              component={CheckBox} />
            <Field
              name="OZO"
              label="101"
              component={CheckBox} />
            <Field
              name="OZT"
              label="102"
              component={CheckBox} />
            <Field
              name="OOZ"
              label="110"
              component={CheckBox} />
            <Field
              name="OOO"
              label="111"
              component={CheckBox} />
            <Field
              name="OOT"
              label="112"
              component={CheckBox} />
            <Field
              name="OTZ"
              label="120"
              component={CheckBox} />
            <Field
              name="OTO"
              label="121"
              component={CheckBox} />
            <Field
              name="OTT"
              label="122"
              component={CheckBox} />
          </div>
          <div style={styles.lineWrapper}>
            <Field
              name="TZZ"
              label="200"
              component={CheckBox} />
            <Field
              name="TZO"
              label="201"
              component={CheckBox} />
            <Field
              name="TZT"
              label="202"
              component={CheckBox} />
            <Field
              name="TOZ"
              label="210"
              component={CheckBox} />
            <Field
              name="TOO"
              label="211"
              component={CheckBox} />
            <Field
              name="TOT"
              label="212"
              component={CheckBox} />
            <Field
              name="TTZ"
              label="220"
              component={CheckBox} />
            <Field
              name="TTO"
              label="221"
              component={CheckBox} />
            <Field
              name="TTT"
              label="222"
              component={CheckBox} />
          </div>
        </div>
        <div style={styles.buttonWrapper}>
          <button
            type="button"
            key="all"
            onClick={() => this.allValue()}
            style={styles.allBtn}>
            全
          </button>
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

export default reduxHook(radium(ZeroOneTwoSection));
