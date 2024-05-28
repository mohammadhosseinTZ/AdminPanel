export const initialStatePath = {
  pathname: "Dashboard",
  pathChecking: false,
  currentpath:"",
  previoustpath:"Dashboard",
};
export function reducer(state, action) {
  const copyState = { ...state };
  switch (action.type) {
    case "PATHNAMECHANGE":
      copyState.pathname = action.payload;
      break;
    case "PATHCHECKING":
      copyState.pathChecking = action.payload;
      break;
    case "CURRENT":
      copyState.currentpath = action.payload;
      break;
    case "PREVIOUS":
      copyState.previoustpath = action.payload;
      break;

    default:
      break;
  }
  return copyState;
}
