import { operations } from "./constant";

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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

export function randomComputation() {
  return function(dispatch, getState) {
    const { input } = getState().calculator;
    const data = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "add",
      "substract",
      "multiply",
      "divide"
    ];
    const randomInt =
      input === ""
        ? getRandomInt(1, data.length)
        : getRandomInt(0, data.length);
    const elem = data[randomInt];
    if (elem in ["add", "substract", "multiply", "divide"]) {
      dispatch(computeResultAction());
      return dispatch(changeOperationAction(elem));
    }
    return dispatch(addInputAction(elem));
  };
}
