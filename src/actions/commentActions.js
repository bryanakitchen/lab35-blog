export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = (postIndex, text) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, text }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (postIndex, textIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, textIndex }
});
