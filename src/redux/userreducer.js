export const USER_ROLE = "user";
export const DEV_ROLE = "dev";

const initialState = {
  role: USER_ROLE
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return { role: USER_ROLE };
    case "DEV":
      return { role: DEV_ROLE };
    default:
      return state;
  }
};

export const switchToUserRole = {
  type: "USER"
};

export const switchToDevRole = {
  type: "DEV"
};
