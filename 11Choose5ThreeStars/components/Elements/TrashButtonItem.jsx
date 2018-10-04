// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  actionBtn: {
    border: '1px solid #4a4a4a',
    padding: '6px 8px',
    color: '#4a4a4a',
    margin: '0 2px',
    fontSize: 13,
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
  value: Array<number>,
  setValue: Function,
  mean: number,
  label: string,
}

class TrashButtonItem extends PureComponent<Props> {
  render() {
    const {
      value,
      setValue,
      mean,
      label,
    } = this.props;

    const targetIndex = value.findIndex(v => v === mean);

    return (
      <button
        type="button"
        key="one"
        onClick={() => {
          if (!~targetIndex) {
            setValue([
              ...value,
              mean,
            ]);
          } else {
            setValue([
              ...value.slice(0, targetIndex),
              ...value.slice(targetIndex + 1),
            ]);
          }
        }}
        style={[
          styles.actionBtn,
          ~targetIndex && styles.activedBtn,
        ]}>
        {label}
      </button>
    );
  }
}

export default radium(TrashButtonItem);
