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
			<div className="b-chirpinput row">
				<div className="b-chirpinput__input nine columns">
					<input 
						valueLink={this.linkState('value')} 
						className='u-full-width' 
						placeholder='Say Something!'
						type='text'/>
				</div>
				<div className="b-chirpinput__btn three columns">		
					<button className='u-full-width button-primary' onClick={this.handleClick}>Chirp!</button>
				</div>

			</div>
		)
	},
	handleClick:function(){
		this.props.onSave(this.state.value);
		this.setState({value:''});
	}
});

module.exports = ChirpInput;
