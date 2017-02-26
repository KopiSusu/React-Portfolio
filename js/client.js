import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { ReduxAsyncConnect } from 'redux-async-connect'
import {configureStore} from './store/configure-store';

import getRoutes from './routes';

// Add the reducer to your store on the `routing` key
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Configure View
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{getRoutes(store)}
		</Router>
	</Provider>,
	document.getElementById('main')
)
