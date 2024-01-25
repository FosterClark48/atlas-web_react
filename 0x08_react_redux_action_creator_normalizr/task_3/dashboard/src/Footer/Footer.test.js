import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import UserContext from '../App/AppContext';

describe('Footer', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const userLoggedIn = {
    user: { isLoggedIn: true },
  };

  const userLoggedOut = {
    user: { isLoggedIn: false },
  };

  it('renders without crashing', () => {
    shallow(
      <UserContext.Provider value={userLoggedOut}>
        <Footer />
      </UserContext.Provider>
    );
  });

  it('renders the text Copyright', () => {
    const wrapper = mount(
      <UserContext.Provider value={userLoggedOut}>
        <Footer />
      </UserContext.Provider>
    );
    expect(wrapper.text().includes('Copyright')).toEqual(true);
  });

  it ('does not display the Contact us link when the user is logged out', () => {
    const wrapper = mount(
      <UserContext.Provider value={userLoggedOut}>
        <Footer />
      </UserContext.Provider>
    );
    expect(wrapper.text().includes('Contact us')).toEqual(false);
  });

  it('displays the Contact us link when the user is logged in', () => {
    const wrapper = mount(
      <UserContext.Provider value={userLoggedIn}>
        <Footer />
      </UserContext.Provider>
    );
    expect(wrapper.text().includes('Contact us')).toEqual(true);
  });
})
