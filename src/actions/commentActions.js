export const CREATE_COMMENT = 'CREATE_COMMENT';

// takes post index 
export const createComment = (index, text) => ({
  type: CREATE_COMMENT,
  payload: { index, text }
});
// can I say posts.comment ?
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (index, text) => ({
  type: DELETE_COMMENT,
  payload: { index, text }
});
