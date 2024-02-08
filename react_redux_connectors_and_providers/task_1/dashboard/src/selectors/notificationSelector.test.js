import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const mockState = fromJS({
    filter: 'DEFAULT',
    notifications: {
      '1': { id: 1, type: "default", value: "New course available", isRead: false },
      '2': { id: 2, type: "urgent", value: "New resume available", isRead: true },
      '3': { id: 3, type: "urgent", value: "New data available", isRead: false }
    }
  });

  it('filterTypeSelected should return the current filter', () => {
    const selectedFilter = filterTypeSelected(mockState);
    expect(selectedFilter).toEqual('DEFAULT');
  });

  it('getNotifications should return all notifications', () => {
    const notifications = getNotifications(mockState);
    expect(notifications.toJS()).toEqual(mockState.get('notifications').toJS());
  });

  it('getUnreadNotifications should return only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(mockState);
    const expectedUnreadNotifications = mockState.get('notifications').filter(notif => !notif.get('isRead'));
    expect(unreadNotifications.toJS()).toEqual(expectedUnreadNotifications.toJS());
  });
});
