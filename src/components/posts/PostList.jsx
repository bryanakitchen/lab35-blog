import React from 'react';
import { getPosts } from '../../selectors/postSelectors';
import { useSelector } from 'react-redux';
import Post from './Post';

export default function PostList() {
  const posts = useSelector(getPosts);
  // console.log('POSTS before map', posts);

  const postElements = posts.posts.map((post, i) => (
    <li key={post.title}>
      <Post {...post} index={i} />
    </li>
  ));
  // console.log('postElements', postElements);

  return (
    <ul>
      {postElements} 
    </ul>
  );
}
