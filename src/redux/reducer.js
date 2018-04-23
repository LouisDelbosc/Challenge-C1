export const initialState = {
  result: "",
  input: "0",
  operation: {
    display: "",
    ops: (a, b) => a + b,
  },
};

export const calculator = (state = initialState, action) => {
  switch (action.type) {
  case 'CLEAR':
    return initialState;
  }
  return state;
}

export const clearAction = () => ({
  type: 'CLEAR',
})

// export const numberAction = ()
