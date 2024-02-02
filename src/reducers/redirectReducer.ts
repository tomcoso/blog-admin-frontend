type ActionArg = {
  type: "write" | "clear";
  path: string;
};

function redirectReducer(state: string, action: ActionArg) {
  switch (action.type) {
    case "write":
      return action.path;
    case "clear":
      return "";
    default:
      console.error("Error changing redirect state: Wrong action type.");
      return state;
  }
}

export default redirectReducer;

export type { ActionArg };
