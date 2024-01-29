import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  }
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  }
}

// Higher-order function to bind UI action creators
export const bindUIActionCreators = (dispatch) => ({
  boundLogin: (email, password) => dispatch(login(email, password)),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
