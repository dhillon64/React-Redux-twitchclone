export default (state = "", action) => {
  switch (action.type) {
    case "FILTER_STREAMS":
      return (state = action.payload);
    default:
      return state;
  }
};
