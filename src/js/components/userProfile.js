var React = require('react');
var ChirpStore = require('../stores/chirps');
var UsersStore = require('../stores/users');
var utils = require('../utils');
var FollowButton = require('./followButton');
var ChirpsList = require('./chirpsList');


var UserProfile = React.createClass({
	getInitialState:function(){
		var id = parseInt(this.props.params.id, 10);
		return {
			user: UsersStore.get(id) || {},
			chirps: ChirpStore.getByUserId(id)
		}
	},
	mixins:[ChirpStore.mixin(), UsersStore.mixin()],
	render: function () {

        return (<div>
            <img className='two columns' src={utils.avatar(this.state.user.email)} />
            <div className='ten columns'>

                <h1> {this.state.user.fullname} </h1>
                <h3 className='timestamp'> @{this.state.user.username} </h3>

                <p> <FollowButton userId={this.state.user.cid} /> </p>
                <ChirpsList chirps={this.state.chirps}/>
            </div>
        </div>);
    }
});

module.exports = UserProfile;
