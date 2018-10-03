// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { Field } from 'redux-form';
import BigDefinitionForm from './Form/BigDefinitionForm';
import BooleanButton from './Form/BooleanButton';

const styles = {
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 8px 8px 8px',
    border: '1px solid #4a4a4a',
    margin: '4px 4px 8px 4px',
  },
  lineWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px 0',
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    letterSpacing: 1,
    margin: '0 4px 0 0',
  },
  button: {
    width: 25,
    margin: '0 1px',
  },
};

class AmountSection extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【奇号个数】</span>
          <Field
            name="oddNumberZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddNumberOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddNumberTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="oddNumberThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【大号个数】</span>
          <Field
            name="bigNumberZero"
            text="0"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigNumberOne"
            text="1"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigNumberTwo"
            text="2"
            buttonstyle={styles.button}
            component={BooleanButton} />
          <Field
            name="bigNumberThree"
            text="3"
            buttonstyle={styles.button}
            component={BooleanButton} />
        </div>
        <div style={styles.lineWrapper}>
          <span style={styles.title}>【大号定义】</span>
          <Field
            name="bigDefinition"
            component={BigDefinitionForm} />
        </div>
      </div>
    );
  }
}

export default radium(AmountSection);
