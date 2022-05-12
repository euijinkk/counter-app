const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const RESET = "RESET";

export const reducer = (count, action) => {
  switch (action.type) {
    case INCREAMENT:
      return count + action.payload;
    case DECREAMENT:
      return count - action.payload;
    case RESET:
      return 0;
    default:
      break;
  }
};

export const incermentActionCreater = (diff) => {
  return { type: INCREAMENT, payload: diff };
};

export const decermentActionCreater = (diff) => {
  return { type: DECREAMENT, payload: diff };
};

export const resetActionCreater = () => {
  return { type: RESET };
};
