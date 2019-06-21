import React from 'react';
import { shallow, mount } from 'enzyme';

import VenueCardList from './VenueCardList';
import VenueCard from './VenueCard/VenueCard';

describe('<VenueCardList />', () => {
  const props = {
    id: '12345',
    venues: [
      {id: 1, name: 'Test 1', image_url: 'https://via.placeholder.com/150'},
      {id: 2, name: 'Test 2', image_url: 'https://via.placeholder.com/150'},
      {id: 3, name: 'Test 3', image_url: 'https://via.placeholder.com/150'}
    ],
    venueClick: () => console.log('Hello World!')
  };
  const wrapper = shallow(<VenueCardList {...props} />);
  
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render a VenueCard for each item in venues prop', () => {
    expect(wrapper.find(VenueCard)).toHaveLength(props.venues.length);
  });
})