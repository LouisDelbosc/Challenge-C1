export const operations = {
  default: { display: "", ops: (a, b) => a + b },
  add: { display: "+", ops: (a, b) => a + b },
  substract: { display: "-", ops: (a, b) => a - b },
  multiply: { display: "x", ops: (a, b) => a * b },
  divide: { display: "/", ops: (a, b) => a / b }
};

export const initialState = {
  previousResult: "",
  result: 0,
  input: "",
  operation: operations.default
};

export function concatValues(stateValue, value) {
  const newValue = `${stateValue}${value}`;
  const isNumber = !isNaN(Number(newValue));
  if (newValue === "-") return newValue;
  return isNumber ? newValue : stateValue;
}

export function computeResult({ result, input, operation }) {
  return input !== "" ? operation.ops(result, Number(input)) : result;
}

export function getOperation(operationInput) {
  return operations[operationInput]
    ? operations[operationInput]
    : operations.default;
}

export const calculator = (state = initialState, action) => {
  const { input, result } = state;
  const { type, value } = action;
  switch (type) {
    case "CLEAR":
      return initialState;
    case "COMPUTE":
      return {
        ...initialState,
        result: computeResult(state),
        previousResult: `${result}`
      };
    case "INPUT":
      return { ...state, input: concatValues(input, value) };
    case "OPERATION":
      return { ...state, operation: getOperation(value) };
    default:
      return state;
  }
};

export const clearAction = () => ({ type: "CLEAR" });

export const computeResultAction = () => ({ type: "COMPUTE" });

export const addInputAction = value => ({ type: "INPUT", value });

export const changeOperationAction = op => ({ type: "OPERATION", value: op });

export function addInput(value) {
  return function(dispatch, getState) {
    const { calculator } = getState();
    const { result, operation } = calculator;
    if (result !== 0 && operation === operations.default) {
      dispatch(clearAction());
      return dispatch(addInputAction(value));
    }
    return dispatch(addInputAction(value));
  };
}

export function clearCalculator() {
  return function(dispatch, getState) {
    return dispatch(clearAction());
  };
}

export function compute() {
  return function(dispatch, getState) {
    return dispatch(computeResultAction());
  };
}

export function changeOperation(op) {
  return function(dispatch, getState) {
    dispatch(computeResultAction());
    return dispatch(changeOperationAction(op));
  };
}
