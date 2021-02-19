import { 
  createComment, 
  CREATE_COMMENT, 
  deleteAllComments, 
  deleteComment, 
  DELETE_ALL_COMMENTS, 
  DELETE_COMMENT 
} from './commentActions';

describe('Comment Actions', () => {
  it('Creates a comment Action', () => {
    const action = createComment(0, 'This is my comment');

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postIndex: 0,
        text: 'This is my comment'
      }
    });
  });

  it('Deletes a comment Action', () => {
    const action = deleteComment(0, 0);

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 0,
        textIndex: 0
      }
    });
  });

  it('Deletes all comments in one post Action', () => {
    const action = deleteAllComments(1);

    expect(action).toEqual({
      type: DELETE_ALL_COMMENTS,
      payload: {
        postIndex: 1,
      }
    });
  });
});
