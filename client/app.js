//client side app experience 
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Trip from './trip';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Trip),
    document.getElementById('app')
  );
});
