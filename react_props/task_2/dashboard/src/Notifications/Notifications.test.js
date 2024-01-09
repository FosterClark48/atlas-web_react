import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
  });

  it('first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.prop('type')).toEqual('default');
    expect(firstNotificationItem.shallow().text()).toContain('New course available');
  });
})
