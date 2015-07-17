import React from 'react';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';

import LocationStore from '../stores/location_store';
import LocationActions from '../actions/location_actions';

var Locations = React.createClass({

    // Fired when the component is created
    getInitialState() {
        return LocationStore.getState();
    },

    // Fired just before the component is mounted
    // this should be fixed in 0.14
    componentWillMount() {
        // Checks for server side or client rendering
        // This is needed, because react expects a document element
        if (ExecutionEnvironment.canUseDOM) {
            LocationStore.listen(this.onChange);
        }
    },

    // Fired just before the component is unmounted
    // this should be fixed in 0.14
    componentWillUnmount() {
        if (ExecutionEnvironment.canUseDOM) {
            LocationStore.unlisten(this.onChange);
        }
    },

    // updates the state when changed, which then triggers a render
    onChange(state) {
        this.setState(state);
    },

    // This is triggered when the button is clicked
    update () {
        LocationActions.fetchLocations();
    },

    renderListEl (location, i) {
        return (
            <li key={ 'location_' + i }>{ location.name }</li>
        );
    },

    render() {
        // Error Messaging
        if (this.state.errorMessage) {
            return (
                <div>Something is wrong</div>
            );
        }

        // Add the loading overlay here
        if (this.state.loading ) {
            console.log('loading');
        }

        // Main Rendering
        return (
            <div>
                <h1>React / Alt Demo</h1>
                <ul>
                    { this.state.locations.map(this.renderListEl) }
                </ul>
                <button onClick={ this.update }>Update</button>
            </div>
        );
    }
});

export default Locations;
