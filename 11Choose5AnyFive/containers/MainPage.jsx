// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

type Props = {

}

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        Main
      </div>
    );
  }
}

export default MainPage;
