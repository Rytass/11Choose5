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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    border: '1px solid #4a4a4a',
    margin: '4px 8px 0 8px',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
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
  spaceBtn: {
    width: 42,
  },
};

type Props = {
  changeField: Function,
}

class SpecialSection extends PureComponent<Props> {
  allValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', true);
    changeField('isContinuous', true);
    changeField('uphill', true);
    changeField('downhill', true);
  }

  clearValue() {
    const {
      changeField,
    } = this.props;

    changeField('noContinuous', false);
    changeField('isContinuous', false);
    changeField('uphill', false);
    changeField('downhill', false);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【特別排除】</span>
          <Field
            name="uphill"
            label="上山"
            component={CheckBox} />
          <Field
            name="downhill"
            label="下山"
            component={CheckBox} />
          <Field
            name="isContinuous"
            label="连号"
            component={CheckBox} />
          <Field
            name="noContinuous"
            label="不连"
            component={CheckBox} />
          <button
            type="button"
            key="all"
            onClick={() => this.allValue()}
            style={styles.clearBtn}>
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

export default reduxHook(radium(SpecialSection));
