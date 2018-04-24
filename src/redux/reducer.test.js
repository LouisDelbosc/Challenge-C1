import { operations } from './constant';
import { addInput } from './action';
import {
  computeResult,
  concatValues,
  displayCalculatorLabel,
  getOperation,
} from "./reducer";

describe("reducer", () => {
  describe("concatValues()", () => {
    it("should concat value if value is an number", () => {
      expect(concatValues("", 5)).toBe("5");
    });
    it("should not concat value if value is not a number", () => {
      expect(concatValues("1", "*")).toBe("1");
    });
    it("should concat value if state is int and value dot", () => {
      expect(concatValues("5", ".")).toBe("5.");
    });
    it("should not concat value if state is float and value dot", () => {
      expect(concatValues("5.2", ".")).toBe("5.2");
    });
    it("should concat value if state empty and value is minus", () => {
      expect(concatValues("", "-")).toBe("-");
    });
    it("should concat value if state minus and value number", () => {
      expect(concatValues("-", "5")).toBe("-5");
    });
    it("should not concat value if state is number and value is minus", () => {
      expect(concatValues("10", "-")).toBe("10");
    });
  });

  describe("computeResult", () => {
    it("should sum result and input keys", () => {
      const state = {
        result: 0,
        input: "2",
        operation: { ops: (a, b) => a + b }
      };
      expect(computeResult(state)).toBe(2);
    });

    it("should multiply result and input keys", () => {
      const state = {
        result: 5.2,
        input: "2",
        operation: { ops: (a, b) => a * b }
      };
      expect(computeResult(state)).toBe(10.4);
    });

    it("should return result if no input", () => {
      const state = {
        result: 5,
        input: "",
        operation: { ops: (a, b) => a * b }
      };
      expect(computeResult(state)).toBe(5);
    });
    it("should return error if cannot compute", () => {
      const state = {
        result: 0,
        input: "0",
        operation: { ops: (a, b) => a / b }
      };
      expect(computeResult(state)).toBe("error");
    });
  });

  describe("getOperation", () => {
    it("should return add operation", () => {
      expect(getOperation("add")).toBe(operations.add);
    });
    it("should return divide operation", () => {
      expect(getOperation("divide")).toBe(operations.divide);
    });
    it("should return substract operation", () => {
      expect(getOperation("substract")).toBe(operations.substract);
    });
    it("should return multiply operation", () => {
      expect(getOperation("multiply")).toBe(operations.multiply);
    });
    it("should return default", () => {
      expect(getOperation("not known operation")).toBe(operations.default);
    });
  });

  describe("display calculator label", () => {
    it("should be empty for default state", () => {
      const state = { result: 0, input: "", operation: operations.default };
      expect(displayCalculatorLabel(state)).toBe("");
    });
    it("should show the whole line", () => {
      const state = { result: 1, input: "10", operation: operations.add };
      expect(displayCalculatorLabel(state)).toBe("1 + 10");
    });

    it("should only display input if default result and default operation", () => {
      const state = { result: 0, input: "10", operation: operations.default };
      expect(displayCalculatorLabel(state)).toBe("10");
    });

    it("should not display result if error", () => {
      const state = {
        result: "error",
        input: "10",
        operation: operations.default
      };
      expect(displayCalculatorLabel(state)).toBe("10");
    });
  });

  describe("thunk", () => {
    describe("addInput", () => {
      it("should call input action if default state", () => {
        const getState = jest.fn(() => ({
          calculator: {
            result: 0,
            input: "",
            operation: operations.default
          }
        }));
        const dispatch = jest.fn();
        addInput("1")(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({ type: "INPUT", value: "1" });
      });

      it("should not call input action if result is not 0 and operations is default", () => {
        const getState = jest.fn(() => ({
          calculator: {
            result: 5,
            input: "",
            operation: operations.default
          }
        }));
        const dispatch = jest.fn();
        addInput("1")(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({ type: "CLEAR" });
        expect(dispatch).toHaveBeenCalledWith({ type: "INPUT", value: "1" });
      });
    });
  });
});
