import React from 'react';

const ErrorPage = (props) => {
  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#e6e6e6'}}>404<br/>Page Not Found</div>
  )
}

export default ErrorPage;