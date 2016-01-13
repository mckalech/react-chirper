var React = require('react');
var actions = require('../actions');
var UsersStore = require('../stores/users');
var Link = require('react-router').Link;



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
		var items = this.state.users.map(function(user){
			return <div key={user.cid}>{user.username}</div>
		});
		return (
			<ul className="b-userslist row">
				{items}
			</ul>
		)
	},
});

module.exports = UsersList;
