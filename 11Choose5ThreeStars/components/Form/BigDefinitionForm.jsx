// @flow

import React, { PureComponent } from 'react';
import {
  BIG_DEFINITONS_SIX_ELEVEN,
  BIG_DEFINITONS_SEVEN_ELEVEN,
} from '../../shared/bigDefinition';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 16px 0 0',
  },
  label: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    margin: '0 6px 0 3px',
  },
};

type Props = {
  input: {
    name: string,
    onChange: Function,
    value: boolean,
  },
}

class BigDefinitionForm extends PureComponent {
  props: Props

  render() {
    const {
      input: {
        onChange,
        value,
      },
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <input
          id={BIG_DEFINITONS_SIX_ELEVEN}
          checked={value === BIG_DEFINITONS_SIX_ELEVEN}
          onChange={() => onChange(BIG_DEFINITONS_SIX_ELEVEN)}
          type="checkbox" />
        <label
          htmlFor={BIG_DEFINITONS_SIX_ELEVEN}
          style={styles.label}>
          6-11
        </label>
        <input
          id={BIG_DEFINITONS_SEVEN_ELEVEN}
          checked={value === BIG_DEFINITONS_SEVEN_ELEVEN}
          onChange={() => onChange(BIG_DEFINITONS_SEVEN_ELEVEN)}
          type="checkbox" />
        <label
          htmlFor={BIG_DEFINITONS_SEVEN_ELEVEN}
          style={styles.label}>
          7-11
        </label>
      </div>
    );
  }
}

export default BigDefinitionForm;
