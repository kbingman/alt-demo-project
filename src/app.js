import React from 'react';
import alt from './alt';
import Locations from './components/locations.jsx';

// loads the data that has already been rendered on the server
// into the client instance
alt.bootstrap(JSON.stringify(bootstrapData));

// Renders the main react component
React.render(
  <Locations />,
  document.getElementById('container')
);
