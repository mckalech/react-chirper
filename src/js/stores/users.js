var constants = require('../constants');

var UsersStore = module.exports = require('./store').extend({
	init: function(){
		this.bind(constants.GOT_USERS, function(data){
			this.set(data);
		});
		this.bind(constants.FOLLOWED, this.updateUser);
		this.bind(constants.UNFOLLOWED, this.updateUser);
	},
	currentUser: USER,
	updateUser: function(data){
		this.currentUser = data;
	}
});