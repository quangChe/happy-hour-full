import React from 'react';
import './LoadingSpinner.scss';

import Logo from './Logo';

const LoadingSpinner = () => (
  <div className="container">
    <div className="lds-ripple"><div></div><div></div></div>
    <Logo/>
  </div>
)

export default LoadingSpinner;