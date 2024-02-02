import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('uiReducer', () => {
  it('should return initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return initial state when an unknown action is passed', () => {
    const unknownAction = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, unknownAction);
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return the right state when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const startAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, startAction);
    expect(state).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });
});
