export const addThing = (id, item) => ({
  type: "ADD",
  payload: [id, item],
});

export const deleteThing = (id) => ({
  type: "DELETE",
  payload: id,
});

export const editThing = (id, item) => ({
  type: "EDIT",
  payload: [id, item],
});
