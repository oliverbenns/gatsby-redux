const initialState = {
  email: null,
  name: null,
  submitted: false,
};

export default function customer(state, action = {}) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  const reducers = {
    ['DELETE_CUSTOMER']: () => ({
      ...initialState,
    }),

    ['SUBMIT_CUSTOMER']: () => ({
      ...state,
      submitted: true,
    }),

    ['UPDATE_CUSTOMER']: () => ({
      ...state,
      ...action.data,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
