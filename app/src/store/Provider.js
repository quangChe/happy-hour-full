import React from 'react';
import { Provider as ReduxProvider} from 'react-redux';
import Store from '../store';

const Provider = (props) => (
  <ReduxProvider store={Store}>{props.children}</ReduxProvider>
);

export default Provider;

