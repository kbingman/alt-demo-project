import React from 'react';
import LocationStore from '../stores/location_store';
import LocationActions from '../actions/location_actions';

var Favourites = React.createClass({

    getInitialState() {
        return LocationStore.getState();
    },

    componentDidMount() {
        FavouritesStore.listen(this.onChange);
    },

    componentWillUnmount() {
        FavouritesStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
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
        debugger;

        if (!this.state.locations.length) {
            console.log('loading');
            // <img src="/my-cool-spinner.gif" />
            return (
                <div>
                </div>
            )
        }

        return (
            <ul>
                { this.state.favourites.map(this.renderListEl) }
            </ul>
        );
    }
});

export default Favourites;
