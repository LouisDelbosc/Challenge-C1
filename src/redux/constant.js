export const RESULT_ERROR = "error";

export const operations = {
  default: { display: "", ops: (a, b) => a + b },
  add: { display: "+", ops: (a, b) => a + b },
  substract: { display: "-", ops: (a, b) => a - b },
  multiply: { display: "x", ops: (a, b) => a * b },
  divide: { display: "/", ops: (a, b) => a / b }
};
