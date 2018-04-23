export const operations = {
  default: { display: "", ops: undefined },
  add: { display: "+", ops: (a, b) => a + b },
  substract: { display: "-", ops: (a, b) => a - b },
  multiply: { display: "x", ops: (a, b) => a * b },
  divide: { display: "/", ops: (a, b) => a / b }
};

export const initialState = {
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
  const { input } = state;
  const { type, value } = action;
  switch (type) {
    case "CLEAR":
      return initialState;
    case "COMPUTE":
      return { ...initialState, result: computeResult(state) };
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
