var React = require('react');
var ChirpBox = require('./chirpBox');

var ChirpsList = React.createClass({
	getInitialState:function(){
		return {

		}
	},
	render : function(){
		var items = this.props.chirps.map(function(chirp){
			return <ChirpBox chirp={chirp}  key={chirp.cid}/>
		});
		return (
			<ul className="b-chirpslist row">
				{items}
			</ul>
		)
	},
});

module.exports = ChirpsList;
