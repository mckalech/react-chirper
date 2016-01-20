import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Box from './components/box';
import Feed from './components/feed';
import UsersList from './components/usersList';
import UserProfile from './components/userProfile';


const store = configureStore();

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={createBrowserHistory()}>
				<Route path="/" component={Box}>
					<IndexRoute component={Feed} />
					<Route path="users" component={UsersList} />
					<Route path="user/:id" component={UserProfile} />
				</Route>

			</Router>
		</Provider>
	),document.getElementById('content')
);

