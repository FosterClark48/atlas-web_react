import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Footer', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toEqual(true);
  });
})
