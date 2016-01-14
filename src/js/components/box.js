var css = require("../../styles/styles.scss"); 
var React = require('react');
var Link = require('react-router').Link;

var Box = React.createClass({
	render : function(){
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
						<Link to="/about">About</Link>
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
});
module.exports = Box;
