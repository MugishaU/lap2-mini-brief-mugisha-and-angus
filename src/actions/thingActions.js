export default addCat = (event) => ({
  type: "ADD_A_THING",
  payload: event.target.item,
});
