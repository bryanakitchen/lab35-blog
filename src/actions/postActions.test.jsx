import { CREATE_POST, createPost } from './postActions.js';

describe('Blog Actions', () => {
  it('Creates a blog post Action', () => {
    const action = createPost({
      title: 'My New Post',
      body: 'This is my first and newest post.'
    });
    
    expect(action).toEqual({
      type: CREATE_POST,
      payload: { 
        title: 'My New Post', 
        body: 'This is my first and newest post.' 
      }
    });
  });

  it('Deletes a blog post Action', () => {
    const action = deletePost({
      title: 'My New Post',
      body: 'This is my first and newest post.'
    });
    
    expect(action).toEqual({
      type: DELETE_POST,
      payload: { 
        title: 'My New Post', 
        body: 'This is my first and newest post.' 
      }
    });
  });
});
