const initialState = {
  loaded: false,
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'MESSAGES_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'MESSAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        messages: action.response
      };
    case 'MESSAGES_FAIL':
      return {
        ...state,
        loading: false,
        messages: null,
        error: action.error
      };
    default:
      return state;
  }
}
