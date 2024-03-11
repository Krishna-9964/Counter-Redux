export const increment = () => {
  return {
    type: 'INCREMENT',
    payload: {
      incrementValue: 1,
    },
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: {
      decrementValue: 1,
    },
  }
}
