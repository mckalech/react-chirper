var React = require('react');
var ChirpInput = require('./chirpInput');
var ChirpsList= require('./chirpsList');
var actions = require('../actions');
var ChirpsStore = require('../stores/chirps');


var Feed = React.createClass({
	getInitialState:function(){
		return {
			chirps: ChirpsStore.all()
		}
	},
	componentWillInmount: function(){
		ChirpsStore.removeChangeListener(this.onChange);
	},
	componentDidMount:function(){
		ChirpsStore.addChangeListener(this.onChange);
		
	},
	onChange:function(){
		if(this.isMounted()){
			this.setState({
				chirps: ChirpsStore.all()
			})
		}
		
	},
	render : function(){
		return (
			<div>
				<ChirpInput onSave={this.saveChirp}/>
				<ChirpsList chirps={this.state.chirps}/>
			</div>
		)
	},
	saveChirp:function(text){
		actions.chirp(text);
	}
});
module.exports = Feed;
