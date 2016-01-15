var React = require('react');
var actions = require('../actions');
var UsersStore = require('../stores/users');
var Link = require('react-router').Link;
var utils = require('../utils');
var ChirpBox = require('./chirpBox');
var FollowButton = require('./followButton');


var UsersList = React.createClass({
	getInitialState:function(){
		return {
			users: UsersStore.all(),
			user: UsersStore.currentUser
		}
	},
	mixins:[UsersStore.mixin()],
	render : function(){
		var items = this.state.users.filter(function(user){
			return user.cid !== this.state.user.cid;

		}.bind(this)).map(function(user){
			return (
				<ChirpBox user={user} key={user.cid}>
					<FollowButton userId={user.cid}/>
				</ChirpBox>
			)
		});
		return (
			<ul className="b-userslist row">
				{items}
			</ul>
		)
	}
});

module.exports = UsersList;
