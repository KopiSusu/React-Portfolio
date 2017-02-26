const initialState = {
  	loaded: false,
  	loading: true
};

export default function reducer(state = initialState, action = {}) {
  	switch (action.type) {
		case 'USER_LOADING':
		case 'ACCOUNT_LOADING':
		case 'USERS_LOADING':
		  	return {
				...state,
				loading: true
		  	};
		case 'ACCOUNT_SUCCESS':
			return {
				...state,
				loading: false,
				account: action.response
		  	};
		case 'ACCOUNT_FAIL':
			return {
				...state,
				loading: false,
				account: null,
				error: action.error
		  	};
		case 'USER_SUCCESS':
			return {
				...state,
				loading: false,
				user: action.response
		  	};
		case 'USER_FAIL':
			return {
				...state,
				loading: false,
				user: null,
				error: action.error
		  	};
		case 'USERS_SUCCESS':
			return {
				...state,
				loading: false,
				users: action.response
		  	};
		case 'USERS_FAIL':
			return {
				...state,
				loading: false,
				users: null,
				error: action.error
		  	};
		default:
		  	return state;
  	}
}
