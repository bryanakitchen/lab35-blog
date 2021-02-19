import reducer from '.';
import { createComment } from '../actions/commentActions';

describe('Comment Reducer', () => {
  it('Creates a comment using CREATE_COMMENT action in commentReducer', () => {
    const state = {
      posts: [{
        title: 'Thursday',
        body: 'Today is Thursday'
      }]
    };

    const action = createComment(0, 'This is my comment');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{
        title: 'Thursday',
        body: 'Today is Thursday'
      }],
      comments: { 0: ['This is my comment'] }
    });
  });
});
