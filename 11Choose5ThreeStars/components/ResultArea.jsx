// @flow

import React, { PureComponent, Fragment } from 'react';
import chunk from 'lodash/chunk';
import { ipcRenderer } from 'electron';
import VirtualList from 'react-virtual-list';
import ResultList from './ResultList';
import { transNumber } from '../helper/operator';
import { NO_RESULT } from '../shared/message';

const styles = {
  textAreaWrapper: {
    display: 'block',
    width: '100%',
    flex: 1,
    overflow: 'auto',
    backgroundColor: '#fff',
    border: '1px solid #d2d2d2',
    padding: '8px 0',
  },
  resultAreaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '12px 4px',
  },
  resultWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    letterSpacing: 1,
    color: '#4a4a4a',
    fontWeight: 600,
  },
  resultNumber: {
    fontSize: 14,
    letterSpacing: 1,
    color: '#110670',
    fontWeight: 600,
    margin: '0 8px',
  },
  statusText: {
    fontSize: 16,
    letterSpacing: 1,
    color: '#110670',
    fontWeight: 600,
    margin: '2px 0 0 0',
  },
  space: {
    height: 24,
  },
};

type Props = {
  resultNumber: Array<{
    num: number,
  }>,
  isRunning: boolean,
};

class ResultArea extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this.scrollContainer = React.createRef();

    this.state = {
      domLoaded: false,
    };

    this.onContextMenu = () => {
      ipcRenderer.send('CLIPBOARD_CACHE', this.props.resultNumber.map(num => transNumber(num.num)).join('\n'));
    };
  }

  componentDidMount() {
    this.setDomLoaded();

    this.scrollContainer.current.addEventListener('contextmenu', this.onContextMenu);
  }

  componentWillUnmount() {
    this.scrollContainer.current.removeEventListener('contextmenu', this.onContextMenu);
  }

  setDomLoaded() {
    this.setState({ domLoaded: true });
  }

  getScrollableList() {
    const { resultNumber } = this.props;
    const List = VirtualList({
      container: this.scrollContainer.current,
    })(ResultList);

    return (
      <List
        itemHeight={18}
        items={chunk(resultNumber, 1)} />
    );
  }

  getStatusText() {
    const { resultNumber, isRunning } = this.props;

    if (isRunning) {
      return (
        <span style={styles.statusText}>载入中。。。</span>
      );
    }

    if (resultNumber.length) {
      return (
        <span style={styles.statusText}>过滤完毕！</span>
      );
    }

    return (
      <div style={styles.space} />
    );
  }

  render() {
    const { domLoaded } = this.state;
    const { resultNumber } = this.props;

    return (
      <Fragment>
        <div style={styles.textAreaWrapper} ref={this.scrollContainer}>
          {domLoaded ? (
            this.getScrollableList()
          ) : null}
        </div>
        <div style={styles.resultAreaWrapper}>
          <div style={styles.resultWrapper}>
            <span style={styles.label}>结果注数</span>
            {resultNumber.length && resultNumber[0] !== NO_RESULT ? (
              <span style={styles.resultNumber}>{resultNumber.length}</span>
            ) : null}
          </div>
          {this.getStatusText()}
        </div>
      </Fragment>
    );
  }
}

export default ResultArea;
