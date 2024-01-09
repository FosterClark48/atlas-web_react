import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('renders img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
})
