export const addThing = (item) => ({
  type: "ADD",
  payload: item,
});

export const deleteThing = (id) => ({
  type: "DELETE",
  payload: id,
});
