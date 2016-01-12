var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin'); 

var ChirpInput = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState:function(){
		return {
			value: ''
		}
	},
	render : function(){
		return (
			<div>
				<input valueLink={this.linkState('value')}/>
				<button onClick={this.handleClick}>Chirp</button>
			</div>
		)
	},
	handleClick:function(){
		this.props.onSave(this.state.value);
		this.setState({value:''});
	}
});

module.exports = ChirpInput;
