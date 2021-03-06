/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_ALL_COMMENTS, DELETE_COMMENT } from '../actions/commentActions';

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
        ...state,
        [action.payload.postIndex]: [
        
          ...state[action.payload.postIndex].slice(0, action.payload.textIndex),
        
          ...state[action.payload.postIndex].slice(action.payload.textIndex + 1),

        ]
      };
    case DELETE_ALL_COMMENTS:
      return {
        ...state,
        [action.payload.postIndex]: []
      };
    default:
      return state;
  }
}
