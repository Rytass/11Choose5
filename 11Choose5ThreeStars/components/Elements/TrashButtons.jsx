// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import TrashButtonItem from './TrashButtonItem';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1px 4px',
  },
  actionTitle: {
    color: '#4a4a4a',
    fontSize: 13,
    margin: '0 4px',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    border: '1px solid #4a4a4a',
    padding: '6px 8px',
    color: '#4a4a4a',
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
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '4px 8px',
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
    padding: '4px 8px',
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
  title: string,
  value: Array<number>,
  setValue: Function,
}

class TrashButtons extends PureComponent<Props> {
  render() {
    const {
      title,
      value,
      setValue,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <div style={styles.buttonsWrapper}>
          <span style={styles.actionTitle}>{title}</span>
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="01"
            mean={1} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="02"
            mean={2} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="03"
            mean={3} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="04"
            mean={4} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="05"
            mean={5} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="06"
            mean={6} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="07"
            mean={7} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="08"
            mean={8} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="09"
            mean={9} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="10"
            mean={10} />
          <TrashButtonItem
            value={value}
            setValue={setValue}
            label="11"
            mean={11} />
          <button
            type="button"
            key="all"
            onClick={() => setValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])}
            style={styles.allBtn}>
            全
          </button>
          <button
            type="button"
            key="clear"
            onClick={() => setValue([])}
            style={styles.clearBtn}>
            清
          </button>
        </div>
      </div>
    );
  }
}

export default radium(TrashButtons);
