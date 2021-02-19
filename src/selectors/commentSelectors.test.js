import { getComments } from './commentSelectors';

describe('Comment Selectors', () => {
  it('Selects all comments on a post via comment selector', () => {
    const state = {
      posts: [{
        title: 'Friday Post',
        body: 'Dear Diary, today is Friday.'
      }, {
        title: 'Thursday Post',
        body: 'Dear Diary, yesterday was Thursday.'
      }],
      comments: { 0: ['This is my comment for Friday Post'], 
        1: ['This is my comment for Thursday Post'] }
    };

    const comments = getComments(state);

    expect(comments).toEqual({ 
      0: ['This is my comment for Friday Post'], 
      1: ['This is my comment for Thursday Post']
    });
  });
});
