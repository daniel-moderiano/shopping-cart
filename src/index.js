import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// Render the Routes component instead of App. Note that the Routes component does not actually add a DOM element, but instead outlines the control of component rendering
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
