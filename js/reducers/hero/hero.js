const initialState = {
	textOptions: [
		'Full Stack Web Applications',
		'iOS/Android Apps',
		'Landing Pages',
		'User Interfaces',
		'Messenger Bots',
		'Prototypes',
		'Cloud Platforms',
		'SaaS Products'
	],
	selectedIndex: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  	case 'TEXT_SELECT':
  		return {
  			...state,
  			selectedIndex: action.response
  		}
    default:
      	return state;
  }
}
