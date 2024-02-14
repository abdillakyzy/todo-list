const initialState = {
  todos: [],
};

export const TodoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_TODO":
      const newItem = {
        id: Date.now(),
        title: payload,
        complated: false,
      };
      return {
        ...state,
        todos: [...state.todos, newItem],
      };
    default:
      return state;
  }
};
