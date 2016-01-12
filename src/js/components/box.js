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
						<Link to="/about">About</Link>
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
