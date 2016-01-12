var React = require('react');
var API = require('../api');
var ChirpInput = require('./chirpInput');
var actions = require('../actions');

var Feed = React.createClass({
	componentDidMount:function(){
		API.fetchChirps();
	},
	render : function(){
		return (
			<div>
				<ChirpInput onSave={this.saveChirp}/>
				<div>a lot of feed texts</div>
			</div>
		)
	},
	saveChirp:function(text){
		actions.chirp(text);
	}
});
module.exports = Feed;
