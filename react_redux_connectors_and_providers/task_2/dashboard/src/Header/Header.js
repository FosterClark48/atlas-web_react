import React, { Component } from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import { Map } from 'immutable';

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

  logoutSection: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
  },

  logoutButton: {
    backgroundColor: '#1ED2AF',
    border: '1px solid #00003C',
    borderRadius: '8px',
    padding: '.4rem',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    ':focus': {
      borderColor: '#1ED2AF',
      outline: '2px solid #1ED2AF',
    },
  }
});


class Header extends Component {
  render () {
    const { user, logOut } = this.props;

    return (
      <header className={css(styles.headerMain)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.headerTitle)}>
            School dashboard
          </h1>
          {user.isLoggedIn && (
            <div id="logoutSection" className={css(styles.logoutSection)}>
              <p>
                Welcome {user.email} <button className={css(styles.logoutButton)} onClick={logOut}>logout</button>
              </p>
            </div>
          )}
      </header>
    );
  }
}

export function mapStateToProps(state) {
  const uiReducer = state.ui;
    const isLoggedIn = uiReducer.get('isUserLoggedIn');
    const email = uiReducer.getIn(['user', 'email']);
    return { user: { isLoggedIn, email } };
};

export function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
