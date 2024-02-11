import React, { PureComponent } from "react";
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css, } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

const fadeIn = {
  'from': { opacity: 0.5 },
  'to': { opacity: 1 },
};

const bounce = {
  '0%': { tranform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { tranform: 'translateY(5px)' },
};

const styles = StyleSheet.create({

  notifications: {
    display: 'relative',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '3px dotted #00003C',
    marginRight: '.5rem',
    marginTop: '1rem',
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100vw', // Set width to 100% of the viewport width
      height: '100vh', // Set height to 100% of the viewport height
      backgroundColor: 'white',
      padding: 0,
      margin: 0,
      overflowY: 'auto',
      border: 'none',
      zIndex: 2,
    },
  },

  notificationsParagraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    padding: '1.5rem 0 .3rem .8rem',
    margin: '0',
    fontSize: '.8rem',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '1rem 0',
    },
  },

  menuItem: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    marginRight: '1rem',
    // backgroundColor: '#fff8f8',
    cursor: 'pointer',
    position: 'absolute', // Float over every element
    right: '0', // Float to the right of the screen
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '1, 3',
      animationTimingFunction: 'ease-in-out',
    },
  },

  noMenuItem: {
    display: 'none',
  },

  notificationsUnorderedList: {
    paddingLeft: '2.3rem',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      listStyle: 'none',
      paddingLeft: 0,
      margin: 0,
      width: '100%',
    }
  },

  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    zIndex: 3,
  },
})


class Notifications extends PureComponent {

  componentDidMount() {
    this.props.fetchNotifications();
  };

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
    const iconStyle = {
      width: '.8rem',
      height: '.8rem',
      margin: '0.5rem'
    };

    const menuItemDisplay = displayDrawer ? css(styles.noMenuItem) : css(styles.menuItem);

    return (
      <>
        <div className={menuItemDisplay} data-testid="menuItem" onClick={handleDisplayDrawer}>
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="notifications">
            <div className="Notifications-content">
              {listNotifications.length > 0 && (
                <p className={css(styles.notificationsParagraph)}>
                  Here is the list of notifications
                </p>
              )}
              <ul className={css(styles.notificationsUnorderedList)}>
                {listNotifications.length === 0 ? (
                  <NotificationItem value='No new notifications for now' />
                ) : (
                  listNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => markNotificationAsRead(notification.id)}
                    />
                  ))
                )}
              </ul>
            </div>
            <button
              aria-label="Close"
              className={css(styles.closeButton)}
              onClick={handleHideDrawer}>
                <img src={closeIcon} alt="Close" style={iconStyle} />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

function mapStateToProps(state) {
  const notificationState = state.notification;
  return {
    listNotifications: notificationState.get('notifications'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
