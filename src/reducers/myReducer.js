const myReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;

    case "POST_DATA":
      return [...state, action.payload];

    case "DELETE_DATA":
      return state.filter((contact) => contact.id !== action.payload);
      
    default:
      return state;
  }
};
export default myReducer;
