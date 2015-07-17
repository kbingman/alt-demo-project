import React from 'react';
import alt from './alt';
import Locations from './components/locations.jsx';

// loads the data that has already been rendered on the server
// into the client instance
alt.bootstrap(JSON.stringify(bootstrapData));
// if we need to clear the bootstrap data, we can clear it here, though I think react
// will not require it in the same way as bootstrap.

// Renders the main react component
React.render(
  <Locations />,
  document.getElementById('container')
);
