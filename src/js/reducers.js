import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
	isFetching: false,
	chirps: [],
	users: [],
	currentUser: window.USER
};


function chirps(state = initialState.chirps, action={}) {
	switch (action.type) {
        case constants.FETCH_CHIRPS_SUCCESS:
			return action.chirps;
		case constants.POST_CHIRP_SUCCESS:
			return [...state, action.chirp];
		default:
			return state;
	}
}

function users(state = initialState.users, action={}) {
	switch (action.type) {
        case constants.FETCH_USERS_SUCCESS:
			return action.users;
		default:
			return state;
	}
}

function isFetching(state = initialState.isFetching, action={}) {
	switch (action.type) {
		case constants.FETCH_CHIRPS_REQUEST:
			return true;
		case constants.FETCH_CHIRPS_SUCCESS:
			return false;
		default:
			return state;
	}
}

function currentUser(state = initialState.currentUser, action={}){
	switch (action.type) {
		case constants.FOLLOWED:
			return action.user;
		case constants.UNFOLLOWED:
			return action.user;
		default:
			return state;
	}
}


const chirperApp = combineReducers({
	chirps,
	users,
	isFetching,
	currentUser
});

export default chirperApp;