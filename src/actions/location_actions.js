import alt from '../alt';
import LocationsFetcher from '../utils/locations_fetcher'

class LocationActions {

    // checkBootstrap(locations) {
    //     if (locations) {
    //         console.log('checkBootstrap');
    //         this.actions.updateLocations(locations);
    //         return;
    //     }
    //     this.actions.fetchLocations();
    // }

    updateLocations(locations) {
        console.log(+new Date());
        this.dispatch(locations);
    }

    favoriteLocation(locationId) {
        this.dispatch(locationId);
    }

    fetchLocations() {
        // we dispatch an event here so we can have "loading" state.
        this.dispatch();

        LocationsFetcher.fetch()
            .then(this.actions.updateLocations)
            .catch(this.actions.locationsFailed);
    }

    locationsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }

}

export default alt.createActions(LocationActions);
