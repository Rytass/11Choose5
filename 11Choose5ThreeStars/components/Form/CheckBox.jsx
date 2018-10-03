// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '2px 0',
  },
  label: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 0 0 3px',
  },
};

type Props = {
  label: string,
  input: {
    name: string,
    onChange: Function,
    value: boolean,
  },
  meta: {
    form: string,
  },
}

class CheckBox extends PureComponent {
  props: Props

  render() {
    const {
      label,
      input: {
        name,
        onChange,
        value,
      },
      meta: {
        form,
      },
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          id={`${form}:${name}`}
          checked={value}
          onChange={onChange}
          type="checkbox" />
        <label
          htmlFor={`${form}:${name}`}
          style={styles.label}>
          {label}
        </label>
      </div>
    );
  }
}

export default CheckBox;
