import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ } from "./notificationActionTypes";

describe('Action creators', () => {
  it('creates a MARK_AS_READ action', () => {
    const expectedAction = {
      type: 'MARK_AS_READ',
      index: 1,
    };

    expect(markAsRead(1)).toEqual(expectedAction);
  });

  it('creates a SET_TYPE_FILTER action', () => {
    const expectedAction = {
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT'
    };

    expect(setNotificationFilter('DEFAULT')).toEqual(expectedAction);
  });
})
