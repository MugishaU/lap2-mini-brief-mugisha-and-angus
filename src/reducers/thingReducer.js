const initState = { all: ["hummus", "celery", "cucumber"], id: 1 };

const thingReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      const newThing = action.payload;
      return { ...state, all: [newThing, ...state.all] };
    case "DELETE":
      const id = action.payload;
      state.all.splice(id, 1);
      return { ...state, all: [...state.all] };
    default:
      return state;
  }
};

export default thingReducer;
