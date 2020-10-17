import { RECEIVE_API_DATA, RECEIVE_DELETED_DATA, RECEIVE_POSTED_DATA} from '../actions/myAction';

const myReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return action.payload;

    case RECEIVE_DELETED_DATA:
      return state.filter((contact) => contact.id !== action.payload);

    case RECEIVE_POSTED_DATA:
      return [...state, action.payload];
      
    default:
      return state;
  }
};
export default myReducer;
