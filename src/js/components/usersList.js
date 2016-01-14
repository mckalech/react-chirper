var React = require('react');
var actions = require('../actions');
var UsersStore = require('../stores/users');
var Link = require('react-router').Link;
var utils = require('../utils');
var ChirpBox = require('./chirpBox');


var UsersList = React.createClass({
	getInitialState:function(){
		return {
			users: UsersStore.all(),
			user: UsersStore.currentUser
		}
	},
	componentWillInmount: function(){
		UsersStore.removeChangeListener(this.onChange);
	},
	componentDidMount:function(){
		UsersStore.addChangeListener(this.onChange);
		
	},
	onChange:function(){
		if(this.isMounted()){
			this.setState(this.getInitialState());
		}
	},
	render : function(){
		var items = this.state.users.filter(function(user){
			return user.cid !== this.state.user.cid;

		}.bind(this)).map(function(user){
			return <ChirpBox user={user} key={user.cid}>buttons</ChirpBox>
		});
		return (
			<ul className="b-userslist row">
				{items}
			</ul>
		)
	}
});

module.exports = UsersList;
