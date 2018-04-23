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

export const calculator = (state = initialState, action) => {
  const { input } = state;
  switch (action.type) {
    case "CLEAR":
      return initialState;
    case "NUMBER":
      return { ...state, input: concatValues(input, action.value) };
    case "COMPUTE":
      return { ...initialState, result: computeResult(state) };
    default:
      return state;
  }
};

export const clearAction = () => ({ type: "CLEAR" });

export const inputNumberAction = number => ({
  type: "NUMBER",
  value: number
});

export const computeResultAction = () => ({ type: "COMPUTE" });
