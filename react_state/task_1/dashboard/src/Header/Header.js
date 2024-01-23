import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  logo: {
    height: '12rem',
    pointerEvents: 'none',
    '@media (max-width: 900px)': {
      height: '25vw', // Scales with the viewport width
      maxHeight: '12rem', // Prevents the logo from becoming too large
    },
  },

  headerMain: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerTitle: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontSize: '3.5rem',
    margin: '0',
    color: '#00003C',
    fontWeight: '800',
    '@media (max-width: 900px)': {
      fontSize: '6.5vw', // Scales with the viewport width
      maxWidth: '100%', // Ensures text does not overflow the header width
    },
  },
});


function Header() {
  return (
    <header className={css(styles.headerMain)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.headerTitle)}>
          School dashboard
        </h1>
    </header>
  );
}

export default Header;
