import React, { Component } from "react";
import './Global.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import UserContext from './AppContext';

const styles = StyleSheet.create({

  body: {
    display: 'flex',
    flexDirection: 'column',
  },

  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '5px solid #00003C',
    '@media (max-width: 900px)': {
      flexDirection: 'column-reverse',
      // alignItems: 'center',
    },
  },

  headerNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 900px)': {
      width: '100%',
      alignItems: 'flex-end',
    },
  },

  newsMarginLeft: {
    marginLeft: '4rem',
  },

  newsMargin: {
    marginLeft: '40px',
  },

  footer: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontStyle: 'italic',
    fontSize: '1.1rem',
    borderTop: '5px solid #00003C',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => {},
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
    };
  }

  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
    console.log('Logged in... my guy');
  }

  logOut = () => {
    this.setState({ user: { ...this.state.user, isLoggedIn: false }});
    console.log('Logging out... my guy');
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
    console.log(`Notification ${id} has been marked read`);
  }

  componentDidMount() {
    this.handleKeyDown = (event) => {
      if(event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        this.props.logOut();
      }
    };

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    const { listCourses, listNotifications, displayDrawer, user } = this.state;

    return (
      <UserContext.Provider value={{ user: user, logOut: this.logOut, logIn: this.logIn }}>
        <>
          <div className={css(styles.headerWrapper)}>
            <Header />
            <div className={css(styles.headerNotifications)}>
              <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
              />
            </div>
          </div>
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course List'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <div className={css(styles.newsMargin)}>
              <BodySection title='News from the School'>
                <p className={css(styles.newsMarginLeft)}>Foster got hired!!</p>
              </BodySection>
            </div>
          </div>
          <div>
            <Footer footerClassName={css(styles.footer)} />
          </div>
        </>
      </UserContext.Provider>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
