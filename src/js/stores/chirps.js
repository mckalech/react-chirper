var constants = require('../constants');
var UsersStore = require('./users');

var ChirpStore = module.exports = require('./store').extend({
	init: function(){
		this.bind(constants.GOT_CHIRPS, this.set);
		this.bind(constants.CHIRPED, function(data){
			this.add(data);
		});
	},
	timeline: function(){
		var ids = [UsersStore.currentUser.cid].concat(UsersStore.currentUser.following);
		return this._data.filter(function(chirp){
			return ids.indexOf(chirp.userId) >= 0;
		})
	}
});