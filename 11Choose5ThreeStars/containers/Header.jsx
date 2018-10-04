// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    borderBottom: '1px solid #d2d2d2',
  },
  link: {
    lineHeight: '28px',
    borderRadius: 2,
    fontSize: 13,
    letterSpacing: 1,
    padding: '2px 8px 0 9px',
    color: '#212121',
    textDecoration: 'none',
    margin: '0 4px',
    display: 'block',
  },
};

function Header() {
  return (
    <nav style={styles.wrapper}>
      <NavLink
        className="hover-btn"
        key="main"
        style={styles.link}
        to="/main">
        主要模式
      </NavLink>
      <NavLink
        className="hover-btn"
        key="killKeepTwo"
        style={styles.link}
        to="/killKeepTwo">
        杀/出二码/二码合跨
      </NavLink>
    </nav>
  );
}

export default Header;
