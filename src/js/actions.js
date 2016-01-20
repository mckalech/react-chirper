import fetch from 'isomorphic-fetch';
import constants from './constants';
import API from './api';


function postChirpRequest(text){
	return { type: constants.POST_CHIRP_REQUEST};
}
function postChirpSuccess(chirp){
	return { type: constants.POST_CHIRP_SUCCESS, chirp};
}
export function postChirp(text) {
	return function (dispatch) {
		text = text.trim();
		if(text === ''){ return;}
        dispatch(postChirpRequest());
        return API.post('/api/chirps', {text: text})
        .then(json =>
		        dispatch(postChirpSuccess(json))
        );
  };
}

function fetchChirpsRequest(){
	return { type: constants.FETCH_CHIRPS_REQUEST};
}
function fetchChirpsSuccess(chirps){
	return { type: constants.FETCH_CHIRPS_SUCCESS, chirps}
}
export function fetchChirps() {
	return function (dispatch) {
        dispatch(fetchChirpsRequest());
        return API.get('/api/chirps')
        .then(json =>
		        dispatch(fetchChirpsSuccess(json))
        );
  };
}


function fetchUsersRequest(){
	return { type: constants.FETCH_USERS_REQUEST};
}
function fetchUsersSuccess(users){
	return { type: constants.FETCH_USERS_SUCCESS, users}
}
export function fetchUsers() {
	return function (dispatch) {
        dispatch(fetchUsersRequest());
        return API.get('/api/users')
        .then(json =>
		        dispatch(fetchUsersSuccess(json))
        );
  };
}


function followed(user){
	return { type: constants.FOLLOWED, user}
}
export function follow(userId){
	return function (dispatch) {
		return API.post('/api/follow/' + userId)
		.then(json =>
			dispatch(followed(json))

		);
	}
}



function unfollowed(user){
	return { type: constants.FOLLOWED, user}
}
export function unfollow(userId){
	return function (dispatch) {
		return API.post('/api/unfollow/' + userId)
		.then(json =>
			dispatch(unfollowed(json))

		);
	}
}