
describe('Blog Actions', () => {
  it('Creates a blog post action', () => {
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

});
