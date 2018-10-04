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
    width: 35,
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
    backgroundColor: '#f9d854',
  },
  nullButton: {
    width: 35,
    margin: '0 1px',
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
  set: Array<number>,
  pushNumber: Function,
  removeNumber: Function,
  noZero: boolean,
  haveTen: boolean,
}

class KeepCrossFitFieldArray extends PureComponent {
  toggleNumber(number) {
    const {
      fields: {
        name,
      },
      set,
      pushNumber,
      removeNumber,
    } = this.props;

    const targetIndex = set.findIndex(num => num === number);

    if (!~targetIndex) {
      pushNumber(name, number);
    } else {
      removeNumber(name, targetIndex);
    }
  }

  props: Props

  render() {
    const {
      set,
      noZero,
      haveTen,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        {noZero ? null : (
          <button
            type="button"
            key="0"
            style={[
              styles.button,
              ~set.findIndex(num => num === 0) && styles.activedBtn,
            ]}
            onClick={() => this.toggleNumber(0)}>
            0
          </button>
        )}
        <button
          type="button"
          key="1"
          style={[
            styles.button,
            ~set.findIndex(num => num === 1) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(1)}>
          1
        </button>
        <button
          type="button"
          key="2"
          style={[
            styles.button,
            ~set.findIndex(num => num === 2) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(2)}>
          2
        </button>
        <button
          type="button"
          key="3"
          style={[
            styles.button,
            ~set.findIndex(num => num === 3) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(3)}>
          3
        </button>
        <button
          type="button"
          key="4"
          style={[
            styles.button,
            ~set.findIndex(num => num === 4) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(4)}>
          4
        </button>
        <button
          type="button"
          key="5"
          style={[
            styles.button,
            ~set.findIndex(num => num === 5) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(5)}>
          5
        </button>
        <button
          type="button"
          key="6"
          style={[
            styles.button,
            ~set.findIndex(num => num === 6) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(6)}>
          6
        </button>
        <button
          type="button"
          key="7"
          style={[
            styles.button,
            ~set.findIndex(num => num === 7) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(7)}>
          7
        </button>
        <button
          type="button"
          key="8"
          style={[
            styles.button,
            ~set.findIndex(num => num === 8) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(8)}>
          8
        </button>
        <button
          type="button"
          key="9"
          style={[
            styles.button,
            ~set.findIndex(num => num === 9) && styles.activedBtn,
          ]}
          onClick={() => this.toggleNumber(9)}>
          9
        </button>
        {haveTen ? (
          <button
            type="button"
            key="10"
            style={[
              styles.button,
              ~set.findIndex(num => num === 10) && styles.activedBtn,
            ]}
            onClick={() => this.toggleNumber(10)}>
            10
          </button>
        ) : null}
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
    set: selector(state, name),
  }),
  dispatch => bindActionCreators({
    pushNumber: (name, value) => arrayPush(MAIN_FORM, name, value),
    removeNumber: (name, index) => arrayRemove(MAIN_FORM, name, index),
    clearNumber: name => change(MAIN_FORM, name, []),
    clearCount: name => change(MAIN_FORM, name, false),
  }, dispatch),
);

export default reduxHook(
  radium(
    KeepCrossFitFieldArray
  )
);
