var React = require('react'),
	actions = require('../actions'),
	UsersStore = require('../stores/users');


var FollowButton = React.createClass({
	getInitialState: function(){
		return{
			id: UsersStore.currentUser.cid,
			currentlyFollowing: UsersStore.currentUser.following
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
		if(this.state.id === this.props.userId) return <span>This is you!</span>;
		var text, action;
		if(this.state.currentlyFollowing.indexOf(this.props.userId) > -1){
			text = 'Unfollow';
			action = this.unfollow;
		}else{
			text = 'Follow';
			action = this.follow;
		}
		return <button onClick={action}>{text}</button>
	},
	follow: function(){
		actions.follow(this.props.userId);
	},
	unfollow: function(){
		actions.unfollow(this.props.userId);
	}
});
module.exports = FollowButton;
