import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan=2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='First' />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe("2");
  });

  it('renders two cells when isHeader is true and textSecondcell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='First' textSecondCell='Second' />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='First' textSecondCell='Second' />);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').length).toBe(2);
  });

  it('applies header style when isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Header' />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('applies row style when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='Row' />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
})
