var css = require("../../styles/styles.scss"); 
var React = require('react');
var Link = require('react-router').Link;

var Box = React.createClass({
	render : function(){
		return (
			<div>

				<div>
					<Link to="/">Feed</Link>
					<Link to="/about">About</Link>
				</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
});
module.exports = Box;
