// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  change,
  formValueSelector,
} from 'redux-form';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MAIN_FORM } from '../shared/form';
import TrashButtons from './Elements/TrashButtons';
import TextArea from './Form/TextArea.jsx';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
    margin: '0 8px',
    border: '1px solid #4a4a4a',
  },
  title: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 0 2px 6px',
  },
  hint: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '2px 0 0 0',
  },
  btnWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '6px 0 0 0',
  },
  trashWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 0 12px',
  },
  actionBtn: {
    border: '1px solid #4a4a4a',
    padding: '10px 8px',
    margin: '2px 1px',
    backgroundColor: '#f2f2f2',
    fontSize: 15,
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
  trash: string,
}

class TrashSection extends PureComponent<Props> {
  state = {
    first: [],
    second: [],
    third: [],
  }

  add() {
    const {
      changeField,
      trash,
    } = this.props;

    const {
      first,
      second,
      third,
    } = this.state;

    if (first.length && second.length && third.length) {
      const firstText = sortBy(first, num => num).map((number) => {
        if (number < 10) return `0${number}`;

        return `${number}`;
      }).join(' ');

      const secondText = sortBy(second, num => num).map((number) => {
        if (number < 10) return `0${number}`;

        return `${number}`;
      }).join(' ');

      const thirdText = sortBy(third, num => num).map((number) => {
        if (number < 10) return `0${number}`;

        return `${number}`;
      }).join(' ');

      const result = `${firstText} *${secondText} *${thirdText}\n`;

      changeField(`${trash}${result}`);
    }
  }

  render() {
    const {
      first,
      second,
      third,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <Field
          name="trash"
          placeholder="杀垃圾复式，双击清空"
          component={TextArea} />
        <div style={styles.btnWrapper}>
          <div style={styles.trashWrapper}>
            <div style={styles.actionWrapper}>
              <TrashButtons
                title="第一名"
                value={first}
                setValue={value => this.setState({ first: value })} />
              <TrashButtons
                title="第二名"
                value={second}
                setValue={value => this.setState({ second: value })} />
              <TrashButtons
                title="第三名"
                value={third}
                setValue={value => this.setState({ third: value })} />
            </div>
            <div style={styles.actionWrapper}>
              <button
                type="button"
                key="clear"
                onClick={() => this.setState({
                  first: [],
                  second: [],
                  third: [],
                })}
                style={styles.actionBtn}>
                清除
              </button>
              <button
                type="button"
                key="add"
                onClick={() => this.add()}
                style={styles.actionBtn}>
                添加
              </button>
            </div>
          </div>
          <span style={styles.hint}>垃圾复式 一行一组 *-*-* 双击清空</span>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    trash: selector(state, 'trash'),
  }),
  dispatch => bindActionCreators({
    changeField: value => change(MAIN_FORM, 'trash', value),
  }, dispatch),
);

export default reduxHook(radium(TrashSection));
