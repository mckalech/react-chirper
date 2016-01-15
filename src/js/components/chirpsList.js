var React = require('react');
var ChirpBox = require('./chirpBox');
var moment = require('moment');

var ChirpsList = React.createClass({
	render : function(){
		var items = this.props.chirps.map(function(chirp){
			return (<ChirpBox user={chirp}
			                  key={chirp.cid}
							  timestamp={moment(chirp.$created).fromNow()}>
					{chirp.text}
				</ChirpBox>
			)

		});
		return (
			<ul className="b-chirpslist row">
				{items}
			</ul>
		)
	}
});

module.exports = ChirpsList;
