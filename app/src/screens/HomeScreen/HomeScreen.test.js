import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';

describe('Homescreen', () => {
  const props = { 
    businesses: {
      nearbyBusinesses: {data: '', loading: ''}
    }
  };
  const screen = shallow(<HomeScreen {...props}/>);

  describe('when app is loading', () => {
    let loading;

    beforeEach(() => {
      loading = screen.setProps({businesses: {nearbyBusinesses: {data: '', loading: true}}});
    })

    it('renders loading spinner', () => {
      expect(loading.find('LoadingSpinner').exists()).toBe(true);
    })
  })


});