import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';
import NavSlider from './NavSlider/NavSlider';
import NavButton from './NavButton/NavButton';

describe('NavBar', () => {
  const wrapper = shallow(<NavBar  />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();    
  })

  describe('while the app is still loading', () => {
    beforeEach(() => {
      wrapper.setProps({loading: true});    
    })

    it('does not render anything', () => {
      expect(wrapper.find(NavButton)).toHaveLength(0);
      expect(wrapper.find(NavSlider)).toHaveLength(0);
    });
  });

  describe('once app is done loading', () => {
    beforeEach(() => {
      wrapper.setProps({loading: false});  
    });

    it('renders all components', () => {
      expect(wrapper.find(NavButton)).toHaveLength(1);
      expect(wrapper.find(NavSlider)).toHaveLength(1);
    });

    describe('whenever user clicks the NavButton', () => {
      
      it('changes the `menuOpen` state to true if NavButton is opening slide-out menu', () => {
        wrapper.find(NavButton).props().onClick(true);
        expect(wrapper.state().menuOpen).toBe(true);
      });

      it('changes the `menuOpen` state to false if NavButton is closing slide-out menu', () => {
        wrapper.find(NavButton).props().onClick(false);
        expect(wrapper.state().menuOpen).toBe(false);
      });
    })
  });
})
