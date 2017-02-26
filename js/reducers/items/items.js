const initialState = {
  loaded: false,
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ITEMS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'ITEMS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.response
      };
    case 'ITEMS_FAIL':
      return {
        ...state,
        loading: false,
        items: null,
        error: action.error
      };
    default:
      return state;
  }
}
