const initialState = {
  loaded: false,
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CUSTOMERS_PUT_LOADING':
    case 'CUSTOMERS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'CUSTOMERS_SUCCESS':
      return {
        ...state,
        loading: false,
        customers: action.response
      };
    case 'CUSTOMERS_FAIL':
      return {
        ...state,
        loading: false,
        customers: null,
        error: action.error
      };
    case 'CUSTOMERS_PUT_SUCCESS':
      return {
        ...state,
        loading: false,
        customers: _.map(state.customers, (c) => ( c.id === action.response.id ? action.response : c))
      };
    case 'CUSTOMERS_PUT_FAIL':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'CUSTOMER_SELECT':
      return {
        ...state,
        loading: false,
        customer: action.response
      };
    default:
      return state;
  }
}
