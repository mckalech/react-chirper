var React = require('react');
var moment = require('moment');
var utils = require('../utils');
var Link = require('react-router').Link;

var ChirpBox = React.createClass({
	render : function(){
		var c = this.props.chirp;
		return (
			<li className="b-chirpbox row">
				<Link className="two columns" to={'/user/'+c.userId} params={{ id: c.userId}}>
					<img src={utils.avatar(c.email)} />
				</Link>
				<div className="ten columns">
					<p>
						<strong>{c.fullname}</strong>
						<span className="b-chirpbox__timestamp">
							@{c.username} {moment(c.$created).fromNow()}
						</span>
					</p>
					<p>{c.text}</p>	
				</div>
			</li>
		)
	},
});

module.exports = ChirpBox;
