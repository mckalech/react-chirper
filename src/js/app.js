var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var history = require('history/lib/createBrowserHistory')();
var ReactDOM = require('react-dom'),
	React = require('react'),
	Box = require('./components/box'),
	Feed = require('./components/feed'),
	About = require('./components/about'),
	UsersList = require('./components/usersList'); 
var API = require('./api');

API.fetchChirps();
API.fetchUsers();

ReactDOM.render(
	(
		<Router history={history}>
			<Route path="/" component={Box}>
				<IndexRoute component={Feed} />
				<Route path="about" component={About} />
				<Route path="users" component={UsersList} />
				<Route path="user/:id" component={About} />
			</Route>
			
		</Router>
	),document.getElementById('content')
);