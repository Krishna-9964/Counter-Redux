const initialState = {
  count: 5,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.incrementValue,
      }

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload.decrementValue,
      }

    default:
      return state
  }
}

export default counterReducer
