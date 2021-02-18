describe('Comment Actions', () => {
  it('Creates a comment Action', () => {
    const action = createComment({
      text: 'This is my comment'
    });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        text: 'This is my comment'
      }
    });
  });
});
