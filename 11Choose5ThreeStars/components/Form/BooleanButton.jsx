// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #4a4a4a',
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
  text: string,
  buttonstyle: {},
  input: {
    name: string,
    onChange: Function,
    value: boolean,
  },
  noToggle: boolean,
}

class BooleanButton extends PureComponent {
  props: Props

  render() {
    const {
      text,
      buttonstyle,
      input: {
        onChange,
        value,
      },
      noToggle,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <button
          type="button"
          style={[
            styles.button,
            buttonstyle && buttonstyle,
            value && styles.activedBtn,
          ]}
          onClick={() => {
            if (noToggle) {
              alert('选择的个数不对！个数不能大于已选择的数量');
            } else {
              onChange(!value);
            }
          }}>
          {text}
        </button>
      </div>
    );
  }
}

export default radium(BooleanButton);
