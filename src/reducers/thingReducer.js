const initState = { all: ["hummus", "celery", "cucumber"] };

const thingReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      const newThing = action.payload;
      return { ...state, all: [newThing, ...state.all] };
    case "DELETE":
      const id = action.payload;
      const UpdatedList = [
        ...state.all.slice(0, id),
        ...state.all.slice(id + 1),
      ];
      return { ...state, all: UpdatedList };
    case "EDIT":
      let [id2, editThing] = action.payload;
      const EditedList = [
        ...state.all.slice(0, id2),
        editThing,
        ...state.all.slice(id2 + 1),
      ];
      return { ...state, all: EditedList };
    default:
      return state;
  }
};

export default thingReducer;
