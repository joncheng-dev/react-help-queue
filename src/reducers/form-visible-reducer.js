const reducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_FORM_VISIBILITY":
      return !state;
    default:
      return state;
  }
};

export default reducer;
