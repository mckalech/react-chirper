var React = require('react');
var ChirpStore = require('../stores/chirps');
var UsersStore = require('../stores/users');
var utils = require('../utils');
var FollowButton = require('./followButton');


var UserProfile = React.createClass({
	getInitialState:function(){
		var id = parseInt(this.props.params.id, 10);
		return {
			user: UsersStore.get(id) || {},
			chirps: ChirpStore.getByUserId(id)
		}
	},
	componentWillInmount: function(){
		UsersStore.removeChangeListener(this.onChange);
		ChirpStore.removeChangeListener(this.onChange);
	},
	componentDidMount:function(){
		UsersStore.addChangeListener(this.onChange);
		ChirpStore.addChangeListener(this.onChange);

	},
	onChange:function(){
		if(this.isMounted()){
			this.setState(this.getInitialState());
		}
	},
	render: function () {
        var chirps = this.state.chirps.map(function (chirp) {
            return <li key={chirp.cid}> {chirp.text} </li>;
        });

        return (<div>
            <img className='two columns' src={utils.avatar(this.state.user.email)} />
            <div className='ten columns'>

                <h1> {this.state.user.fullname} </h1>
                <h3 className='timestamp'> @{this.state.user.username} </h3>

                <p> <FollowButton userId={this.state.user.cid} /> </p>
                <ul>
                    {chirps}
                </ul>
            </div>
        </div>);
    }
});

module.exports = UserProfile;
