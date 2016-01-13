var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

var API = module.exports = {
	fetchChirps: function(){
		get('/api/chirps').then(actions.gotChirps)
	},
	fetchUsers: function(){
		get('/api/users').then(actions.gotUsers)
	},
	saveChirp: function(text){
		text = text.trim();
		if(text === ''){ return;}
		post('/api/chirps', {text: text}).then(function(data){
			actions.chirped(data);
		});
	}
}

function get(url){
	return fetch(url,{
		credentials: 'same-origin'
	}).then(function(res){
		return res.json();
	});
}

function post(url, body){
	return fetch(url,{
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(body || {}),
		headers:{
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}

	}).then(function(res){
		return res.json();
	});
}


dispatcher.register(function(action){
	switch(action.actionType){
		case constants.CHIRP:
			API.saveChirp(action.data);
			break;
	}
})