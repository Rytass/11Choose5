// @flow

import React, { PureComponent } from 'react';
import {
  arrayPush,
  arrayRemove,
  change,
  formValueSelector,
} from 'redux-form';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../../shared/form.js';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    height: 21,
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #4a4a4a',
    margin: '0 1px',
    padding: '0 6px',
    ':hover': {
      opacity: 0.8,
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
  activedBtn: {
    backgroundColor: '#62f442',
  },
  clearButton: {
    height: 21,
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #4a4a4a',
    margin: '0 8px',
    padding: '0 6px',
    ':hover': {
      opacity: 0.8,
    },
    ':active': {
      boxShadow: '0 1px #666',
      transform: 'translateY(1px)',
    },
  },
};

type Props = {
  fields: {
    name: string,
  },
  bileSet: Array<number>,
  clearNumber: Function,
  pushNumber: Function,
  removeNumber: Function,
  clearBileNumber: Function,
}

class BileSetFieldArray extends PureComponent {
  toggleNumber(number) {
    const {
      fields: {
        name,
      },
      bileSet,
      pushNumber,
      removeNumber,
    } = this.props;

    const targetIndex = bileSet.findIndex(num => num === number);

    if (!~targetIndex) {
      pushNumber(name, number);
    } else {
      removeNumber(name, targetIndex);
    }
  }

  clearNumber() {
    const {
      clearBileNumber,
      clearNumber,
      fields: {
        name,
      },
    } = this.props;

    clearNumber(name);
    clearBileNumber(`zeroOf${name}`);
    clearBileNumber(`oneOf${name}`);
    clearBileNumber(`twoOf${name}`);
    clearBileNumber(`threeOf${name}`);
  }

  props: Props

  render() {
    const {
      bileSet,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <button
          type="button"
          key="01"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 1) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(1)}>
          01
        </button>
        <button
          type="button"
          key="02"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 2) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(2)}>
          02
        </button>
        <button
          type="button"
          key="03"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 3) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(3)}>
          03
        </button>
        <button
          type="button"
          key="04"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 4) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(4)}>
          04
        </button>
        <button
          type="button"
          key="05"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 5) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(5)}>
          05
        </button>
        <button
          type="button"
          key="06"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 6) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(6)}>
          06
        </button>
        <button
          type="button"
          key="07"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 7) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(7)}>
          07
        </button>
        <button
          type="button"
          key="08"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 8) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(8)}>
          08
        </button>
        <button
          type="button"
          key="09"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 9) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(9)}>
          09
        </button>
        <button
          type="button"
          key="10"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 10) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(10)}>
          10
        </button>
        <button
          type="button"
          key="11"
          style={[
            styles.button,
            ~bileSet.findIndex(num => num === 11) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(11)}>
          11
        </button>
        <button
          type="button"
          key="clear"
          style={styles.clearButton}
          onClick={() => this.clearNumber()}>
          清
        </button>
      </div>
    );
  }
}

const reduxHook = connect(
  (state, {
    fields: {
      name,
    },
  }) => ({
    bileSet: selector(state, name),
  }),
  dispatch => bindActionCreators({
    pushNumber: (name, value) => arrayPush(MAIN_FORM, name, value),
    removeNumber: (name, index) => arrayRemove(MAIN_FORM, name, index),
    clearNumber: name => change(MAIN_FORM, name, []),
    clearBileNumber: name => change(MAIN_FORM, name, false),
  }, dispatch),
);

export default reduxHook(
  radium(
    BileSetFieldArray
  )
);
