import { createPost } from '../actions/postActions';
import reducer from './postReducer';

describe('Blog Reducer', () => {
  it('Creates a post using CREATE_POST action in Reducer', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      title: 'Wednesday Post',
      body: 'Dear Diary, today is Wednesday.'
    });
    
    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{
        title: 'Wednesday Post',
        body: 'Dear Diary, today is Wednesday.'
      }]
    });
  });
});
