import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('Action creators', () => {
  it(' creates a LOGIN action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    
    const expectedAction = {
      type: 'LOGIN',
      user: { email, password },
    };

    expect(login(email, password)).toEqual(expectedAction);
  });

  it('creates a LOGOUT action', () => {
    const expectedAction = {
      type: 'LOGOUT',
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('creates a DISPLAY_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };

    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('creates a HIDE_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };

    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
})
