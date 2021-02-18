import { 
  createComment, 
  CREATE_COMMENT, 
  deleteComment, 
  DELETE_COMMENT 
} from './commentActions';

describe('Comment Actions', () => {
  it('Creates a comment Action', () => {
    const action = createComment(0, 'This is my comment');

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        index: 0,
        text: 'This is my comment'
      }
    });
  });

  it('Deletes a comment Action', () => {
    const action = deleteComment(0, 'This is my comment');

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        index: 0,
        text: 'This is my comment'
      }
    });
  });
});
