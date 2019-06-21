import React from 'react';
import { shallow } from 'enzyme';
import ErrorScreen from './ErrorScreen';

describe('Error Screen', () => {
  const screen = shallow(<ErrorScreen />);

  it('renders without crashing', () => {
    expect(screen).toMatchSnapshot();
  });
})