// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  change,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sortBy from 'lodash/sortBy';
import ComposeButton from './ComposeButton';
import { MAIN_FORM } from '../../shared/form';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 0 12px 0',
  },
  allBtn: {
    border: '1px solid #4a4a4a',
    padding: '4px 12px',
    margin: '0 1px 0 12px',
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
  clearBtn: {
    border: '1px solid #4a4a4a',
    padding: '4px 12px',
    margin: '0 12px 0 1px',
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
  addBtn: {
    border: '1px solid #4a4a4a',
    padding: '4px 12px',
    margin: '0 1px',
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
  originText: string,
}

class ComposeButtonSet extends PureComponent<Props> {
  state = {
    numberSet: [],
  }

  add() {
    const {
      numberSet,
    } = this.state;

    const {
      changeField,
      originText,
    } = this.props;

    const usefulNumbers = sortBy(numberSet, num => num).map((number) => {
      if (number < 10) return `0${number}`;

      return `${number}`;
    });

    const result = usefulNumbers.join(' ');

    changeField(`${originText}${result}\n`);
  }

  render() {
    const {
      numberSet,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <ComposeButton
          numberSet={numberSet}
          label="01"
          value={1}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="02"
          value={2}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="03"
          value={3}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="04"
          value={4}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="05"
          value={5}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="06"
          value={6}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="07"
          value={7}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="08"
          value={8}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="09"
          value={9}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="10"
          value={10}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <ComposeButton
          numberSet={numberSet}
          label="11"
          value={11}
          setArray={numbers => this.setState({ numberSet: numbers })} />
        <button
          type="button"
          key="all"
          style={styles.allBtn}
          onClick={() => this.setState({ numberSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] })}>
          全
        </button>
        <button
          type="button"
          key="clear"
          style={styles.clearBtn}
          onClick={() => this.setState({ numberSet: [] })}>
          清
        </button>
        <button
          type="button"
          key="add"
          style={styles.addBtn}
          onClick={() => this.add()}>
          添加
        </button>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    originText: selector(state, 'killCompose'),
  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'killCompose', value),
  }, dispatch),
);

export default reduxHook(radium(ComposeButtonSet));
