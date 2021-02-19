import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function commentReducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []),
          action.payload.text
        ]
      };
    case DELETE_COMMENT:
      return {

      };
    default:
      return state;
  }
}
