export default addThing = (event) => ({
  type: "ADD_A_THING",
  payload: event.target.value,
});
