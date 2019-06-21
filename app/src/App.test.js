import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Provider from './store/Provider';

describe('<App />', () => {
  const app = shallow(<Provider><App /></Provider>);

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  describe('on startup', () => {
    const mounted = mount(<Provider><App /></Provider>);
    it('renders Router', () => {
      expect(mounted.find('Router').exists()).toBe(true);
    });
  
    it('renders Navbar', () => {
      expect(mounted.find('NavBar').exists()).toBe(true);
    });
  
    it('renders the Home screen', () => {
      expect(mounted.find('HomeScreen').exists()).toBe(true);
    });

  });
  
});
