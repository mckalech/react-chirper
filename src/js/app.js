var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var history = require('history/lib/createBrowserHistory')();
var ReactDOM = require('react-dom'),
	React = require('react'),
	Box = require('./components/box'),
	Feed = require('./components/feed'),
	UserProfile = require('./components/userProfile'),
	UsersList = require('./components/usersList'); 
var API = require('./api');

API.startFetchingChirps();
API.startFetchingUsers();

ReactDOM.render(
	(
		<Router history={history}>
			<Route path="/" component={Box}>
				<IndexRoute component={Feed} />
				<Route path="users" component={UsersList} />
				<Route path="user/:id" component={UserProfile} />
			</Route>
			
		</Router>
	),document.getElementById('content')
);