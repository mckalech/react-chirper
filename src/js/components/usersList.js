import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchUsers } from '../actions';
import  { Link } from 'react-router';
import ChirpBox from './chirpBox'
import FollowButton from './followButton'

class UsersList extends Component {
	componentDidMount() {
            this.props.dispatch(fetchUsers());
    }
	render(){
		const { usersList } = this.props;
		let items = usersList.map(function(user){
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
}

function mapStateToProps(state) {
	let {users, currentUser} = state;
	users = users.filter(function(user){
		return user.cid !== currentUser.cid;
	});

	return {
		usersList: users
	};
}


export default connect(mapStateToProps)(UsersList);