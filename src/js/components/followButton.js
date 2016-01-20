import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchChirps } from '../actions';
import { follow, unfollow } from '../actions';


class FollowButton extends Component {
	render(){
		if(this.props.id === this.props.userId) return <span>This is you!</span>;
		if(this.props.currentlyFollowing.indexOf(this.props.userId) > -1){
			return <button onClick={()=>this.unfollowClick()}>Unfollow</button>
		}else{
			return <button onClick={()=>this.followClick()}>Follow</button>
		}
	}
	followClick(){
		this.props.dispatch(follow(this.props.userId));
	}
	unfollowClick(){
		this.props.dispatch(unfollow(this.props.userId));
	}
}

function mapStateToProps(state) {
	let {currentUser} = state;
	return{
		id: currentUser.cid,
		currentlyFollowing: currentUser.following
	}
}

export default connect(mapStateToProps)(FollowButton);