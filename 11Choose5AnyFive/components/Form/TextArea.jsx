// @flow

import React, { PureComponent } from 'react';
import { ipcRenderer } from 'electron';

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textArea: {
    width: '100%',
    height: '100%',
    outline: 'none',
    fontSize: 12,
    letterSpacing: 1,
    color: '#4a4a4a',
    resize: 'none',
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

class TextArea extends PureComponent {
  constructor(props) {
    super(props);

    this.scrollContainer = React.createRef();

    this.onContextMenu = () => {
      ipcRenderer.send('CLIPBOARD_CACHE', this.props.input.value);
    };
  }

  componentDidMount() {
    this.scrollContainer.current.addEventListener('contextmenu', this.onContextMenu);
  }

  componentWillUnmount() {
    this.scrollContainer.current.removeEventListener('contextmenu', this.onContextMenu);
  }

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
      <div style={styles.wrapper} ref={this.scrollContainer}>
        <textarea
          style={styles.textArea}
          value={value}
          rows={5}
          placeholder={placeholder}
          onChange={onChange} />
      </div>
    );
  }
}

export default TextArea;
