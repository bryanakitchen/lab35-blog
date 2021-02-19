import { getPosts } from './postSelectors';

describe('Post Selectors', () => {
  it('Selects all posts via post selector', () => {
    const state = {
      posts: [{
        title: 'Wednesday Post',
        body: 'Dear Diary, today is Wednesday.'
      }, {
        title: 'Tuesday Post',
        body: 'Dear Diary, yesterday was Tuesday.'
      }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{
      title: 'Wednesday Post',
      body: 'Dear Diary, today is Wednesday.'
    }, {
      title: 'Tuesday Post',
      body: 'Dear Diary, yesterday was Tuesday.'
    }]);
  });
});
