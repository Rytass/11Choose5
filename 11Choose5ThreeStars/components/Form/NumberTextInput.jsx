// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    width: 30,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 4px',
  },
  textInput: {
    width: '100%',
    outline: 'none',
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
  },
};

type Props = {
  placeholder: string,
  input: {
    name: string,
    onChange: Function,
    value: string,
  },
}

class NumberTextInput extends PureComponent {
  props: Props

  render() {
    const {
      placeholder,
      input: {
        onChange,
        value,
      },
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          type="number"
          min={0}
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          onChange={onChange} />
      </div>
    );
  }
}

export default NumberTextInput;
