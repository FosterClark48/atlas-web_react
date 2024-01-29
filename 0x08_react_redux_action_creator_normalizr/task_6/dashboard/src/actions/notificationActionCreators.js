import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  }
}

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
}

// Higher-order function to bind notification action creators
export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (index) => dispatch(markAsRead(index)),
  boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
});
