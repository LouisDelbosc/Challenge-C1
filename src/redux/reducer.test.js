import {
  concatValues,
  computeResult,
  operations,
  getOperation
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
        input: ""
      };
      expect(computeResult(state)).toBe(5);
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
});
