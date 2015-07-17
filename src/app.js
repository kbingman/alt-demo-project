import React from 'react';
import alt from './alt';
import Locations from './components/locations.jsx';

window.alt = alt;

console.log('render')
React.render(
  <Locations />, document.getElementById('container')
);
