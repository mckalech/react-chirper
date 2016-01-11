var ReactDOM = require('react-dom'),
	React = require('react'),
	Box = require('./components/box');
var dispatcher = require('./dispatcher');

console.log(dispatcher)

ReactDOM.render(
	(
		<Box/>
	),
	document.getElementById('content')
);
