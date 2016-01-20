var css = require("../../styles/styles.scss");
import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Box extends Component {

	render() {
		return (
			<div>
				<div className='row'>
					<h1> Chirper </h1>
				</div>
				<div className='row'>
					<div className='three columns'>
						<Link to="/">Feed</Link>
						<br />
						<Link to="/users">Users</Link>
						<br />
						<a href='/logout'>Logout</a>
					</div>

					<div className='nine columns'>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
