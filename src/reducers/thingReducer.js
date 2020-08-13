const initState = { all: ["hummus", "celery", "cucumber"] };

const thingReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      const [id0, newThing] = action.payload;
      return { ...state, all: [newThing, ...state.all] };
    case "DELETE":
      const id1 = action.payload;
      const UpdatedList = [
        ...state.all.slice(0, id1),
        ...state.all.slice(id1 + 1),
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
