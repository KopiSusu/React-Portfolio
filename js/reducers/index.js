import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as form} from 'redux-form';

import auth from './auth/auth';
import customers from './customers/customers';
import inbox from './inbox/inbox';
import items from './items/items';
import messages from './messages/messages';
import orders from './orders/orders';

export default combineReducers({
	routing: routerReducer,
	auth,
	customers,
	form,
	inbox,
	items,
	messages,
	orders
});


