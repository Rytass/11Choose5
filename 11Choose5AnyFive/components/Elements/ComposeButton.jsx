// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  numberBtn: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #4a4a4a',
    padding: '6px 4px',
    margin: '0 1px',
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
};

type Props = {
  numberSet: Array<number>,
  setArray: Function,
  label: string,
  value: number,
}

class ComposeButton extends PureComponent<Props> {
  render() {
    const {
      numberSet,
      setArray,
      label,
      value,
    } = this.props;

    const targetIndex = numberSet.findIndex(num => num === value);

    return (
      <button
        type="button"
        key={label}
        onClick={() => {
          if (!~targetIndex) {
            setArray([...numberSet, value]);
          } else {
            setArray([
              ...numberSet.slice(0, targetIndex),
              ...numberSet.slice(targetIndex + 1),
            ]);
          }
        }}
        style={[
          styles.numberBtn,
          ~targetIndex && styles.activedBtn,
        ]}>
        {label}
      </button>
    );
  }
}

export default radium(ComposeButton);
