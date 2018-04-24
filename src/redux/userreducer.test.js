import {
  userReducer,
  switchToUserRole,
  switchToDevRole,
  USER_ROLE,
  DEV_ROLE
} from "./userreducer";

describe("userreducer", () => {
  describe("action", () => {
    it("should update the role to user", () => {
      const state = { role: DEV_ROLE };
      expect(userReducer(state, switchToUserRole).role).toBe(USER_ROLE);
    });

    it("should update the role to dev", () => {
      const state = { role: USER_ROLE };
      expect(userReducer(state, switchToDevRole).role).toBe(DEV_ROLE);
    });
  });
});
