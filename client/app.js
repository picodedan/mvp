//client side app experience 
import React from 'react';
import ReactDOM from 'react-dom';

import Trip from './trip';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Trip),
    document.getElementById('app')
  );
});
