import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends Component {

  render() {
    const { type, html, value, markAsRead } = this.props;

    return html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
    ) : (
      <li data-notification-type={type} onClick={markAsRead}>{value}</li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
