import React from 'react';
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';

import LocationStore from '../stores/location_store';
import LocationActions from '../actions/location_actions';

var Locations = React.createClass({

    getInitialState() {
        LocationActions.updateLocations(this.props.locations);
        return LocationStore.getState();
    },

    componentWillMount() {
        // Checks for server side or client rendering
        if (ExecutionEnvironment.canUseDOM && typeof('bootstrapData') !== 'undefined') {
            LocationStore.listen(this.onChange);
            LocationActions.checkBootstrap(bootstrapData.locations);
        }
    },

    componentWillUnmount() {
        if (ExecutionEnvironment.canUseDOM) {
            LocationStore.unlisten(this.onChange);
        }
    },

    onChange(state) {
        this.setState(state);
    },

    update () {
        LocationActions.fetchLocations();
    },

    renderListEl (location, i) {
        return (
            <li key={ 'location_' + i }>{ location.name }</li>
        );
    },

    render() {
        if (this.state.errorMessage) {
            return (
                <div>Something is wrong</div>
            );
        }

        if (this.state.loading ) {
            console.log('loading');
            // <img src="/my-cool-spinner.gif" />
            // return (
            //     <div>
            //         <button onClick={ this.update }>Update</button>
            //     </div>
            // )
        }

        return (
            <div>
                <h1>Hey there Hanna!</h1>
                <ul>
                    { this.state.locations.map(this.renderListEl) }
                </ul>
                <button onClick={ this.update }>Update</button>
            </div>
        );
    }
});

export default Locations;
