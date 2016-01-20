import React, { Component } from 'react';
import utils from '../utils'
import ChirpsList from './chirpsList'
import { fetchUsers, fetchChirps } from '../actions';
import { connect } from 'react-redux';
import FollowButton from './followButton'

class UserProfile extends Component {
	componentDidMount() {
		this.props.dispatch(fetchChirps());
		this.props.dispatch(fetchUsers());
    }
	render(){
		let user = this.props.user || {};
        return (<div>
            <img className='two columns' src={utils.avatar(user.email)} />
            <div className='ten columns'>

                <h1> {user.fullname} </h1>
                <h3 className='timestamp'> @{user.username} </h3>

				<p> <FollowButton userId={user.cid} /> </p>
                <ChirpsList chirps={this.props.chirps}/>
            </div>
        </div>);
    }
}

function getChirpsByUserId(chirps, userId){
	return chirps.filter(function(chirp){
		return chirp.userId === userId;
	}).sort(function (a, b) {
            return +new Date(b.$created) - +new Date(a.$created);
	});
}

function getUserById(users, id){
	return users.filter(function(item){
		return item.cid === id;
	})[0];
}

function mapStateToProps(state, ownProps) {
	const userId = parseInt(ownProps.params.id, 10);
	let {users, chirps} = state;
	return {
		user: getUserById(users, userId),
		chirps: getChirpsByUserId(chirps, userId)
	}
}


export default connect(mapStateToProps)(UserProfile);