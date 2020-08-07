const initState = { all: ["hummus", "celery", "cucumber"] };

const thingReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_A_THING":
      const newThing = action.payload;
      return { ...state, all: [newThing, ...state.all] };
    default:
      return state;
  }
};

export default thingReducer;
