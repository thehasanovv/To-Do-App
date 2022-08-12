export const initialState = { todo: [], errMessage: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "IS_ERR_MSG":
      return { ...state, errMesage: action.payload };
    case "DELETE_ALL_TO_DO":
      return { ...state, todo: [] };
    case "ADD_TO_DO":
      return { ...state, todo: [...state.todo, action.payload] };
    case "ROMOVE_TO_DO":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
