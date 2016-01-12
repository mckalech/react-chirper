var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var ChirpsStore = require('./stores/chirps');
var history = require('history/lib/createBrowserHistory')();
var ReactDOM = require('react-dom'),
	React = require('react'),
	Box = require('./components/box'),
	Feed = require('./components/feed'),
	About = require('./components/about');

ReactDOM.render(
	(
		<Router history={history}>
			<Route path="/" component={Box}>
				<IndexRoute component={Feed} />
				<Route path="about" component={About} />
			</Route>
			
		</Router>
	),document.getElementById('content')
);