export const addThing = (item) => ({
  type: "ADD",
  payload: item,
});

export const deleteThing = (id) => ({
  type: "DELETE",
  payload: id,
});

export const editThing = (id, item) => ({
  type: "EDIT",
  payload: [id, item],
});
