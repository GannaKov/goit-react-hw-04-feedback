//import PropTypes from 'prop-types';
import React from 'react';
//import React, { useState } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <GlobalStyle />
    </div>
  );
};
