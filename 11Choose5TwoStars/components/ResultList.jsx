// @flow

import React from 'react';
import { NO_RESULT } from '../shared/message';
import { transNumber } from '../helper/operator';

const styles = {
  line: {
    width: '100%',
    height: 18,
    lineHeight: 1.5,
    fontSize: 12,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
  },
  value: {
    fontSize: 14,
    color: '#4a4a4a',
  },
};

function ResultList({
  virtual,
}: {
  virtual: {
    height: number,
  },
}) {
  return (
    <div style={virtual.style}>
      {virtual.items.map(arrValue => (
        <p key={arrValue[0]} style={styles.line}>
          {arrValue.map((value) => {
            if (value === NO_RESULT) {
              return (
                <span key={value.num} style={styles.value}>{value}</span>
              );
            }

            return (
              <span key={value.num} style={styles.value}>{transNumber(value.num)}</span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default ResultList;
