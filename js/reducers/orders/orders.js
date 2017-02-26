const initialState = {
  loaded: false,
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ORDER_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        order: action.response
      };
    case 'ORDER_FAIL':
      return {
        ...state,
        loading: false,
        order: null,
        error: action.error
      };
    case 'CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: action.response
      };
    case 'CART_FAIL':
      return {
        ...state,
        loading: false,
        cart: null,
        error: action.error
      };
    default:
      return state;
  }
}
