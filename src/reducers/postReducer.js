import { CREATE_POST, DELETE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  const { posts } = state;
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state, 
        posts: [...posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: posts.filter(post => post.title !== action.payload)
      };
    default:
      return state;
  }
}


// const sandboxState = {
//   posts: [{ 
//     title: 'hello', 
//     body: 'words here',
//     comments: [{
//       text: 'hey! Cool post'
//     }]
//   }]
// };
