// @flow

import React, { PureComponent } from 'react';
import {
  Field,
  formValueSelector,
} from 'redux-form';
import radium from 'radium';
import { connect } from 'react-redux';
import { MAIN_FORM } from '../../shared/form.js';
import BooleanButton from '../Form/BooleanButton.jsx';

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
};

type Props = {
  name: string,
  setLength: number,
}

class BileSetNumberSection extends PureComponent<Props> {
  render() {
    const {
      name,
      setLength,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <Field
          name={`zeroOf${name}`}
          text="0"
          buttonstyle={styles.button}
          component={BooleanButton} />
        <Field
          name={`oneOf${name}`}
          text="1"
          noToggle={setLength < 1}
          buttonstyle={styles.button}
          component={BooleanButton} />
        <Field
          name={`twoOf${name}`}
          text="2"
          noToggle={setLength < 2}
          buttonstyle={styles.button}
          component={BooleanButton} />
        <Field
          name={`threeOf${name}`}
          text="3"
          noToggle={setLength < 3}
          buttonstyle={styles.button}
          component={BooleanButton} />
        <Field
          name={`fourOf${name}`}
          text="4"
          noToggle={setLength < 4}
          buttonstyle={styles.button}
          component={BooleanButton} />
        <Field
          name={`fiveOf${name}`}
          text="5"
          noToggle={setLength < 5}
          buttonstyle={styles.button}
          component={BooleanButton} />
      </div>
    );
  }
}

const reduxHook = connect(
  (state, {
    name,
  }) => ({
    setLength: selector(state, name).length,
  }),
);

export default reduxHook(
  radium(
    BileSetNumberSection
  )
);
