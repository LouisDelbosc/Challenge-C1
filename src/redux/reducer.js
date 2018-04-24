import { operations, RESULT_ERROR } from './constant';

export const initialState = {
  result: 0,
  input: "",
  operation: operations.default
};

export function displayCalculatorLabel({ result, input, operation }) {
  return (operation === operations.default && result === 0) ||
    result === RESULT_ERROR
    ? `${input}`
    : `${result} ${operation.display} ${input}`;
}

export function concatValues(stateValue, value) {
  const newValue = `${stateValue}${value}`;
  const isNumber = !isNaN(Number(newValue));
  if (newValue === "-") return newValue;
  return isNumber ? newValue : stateValue;
}

export function computeResult({ result, input, operation }) {
  const newResult = operation.ops(result, Number(input));
  return input !== ""
    ? isFinite(newResult)
      ? newResult
      : RESULT_ERROR
    : result;
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
      return {
        ...initialState,
        result: computeResult(state)
      };
    case "INPUT":
      return { ...state, input: concatValues(input, value) };
    case "OPERATION":
      return { ...state, operation: getOperation(value) };
    default:
      return state;
  }
};
