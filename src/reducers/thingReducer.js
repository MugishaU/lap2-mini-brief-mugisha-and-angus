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
    default:
      return state;
  }
};

export default thingReducer;
