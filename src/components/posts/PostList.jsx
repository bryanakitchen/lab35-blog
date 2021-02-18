import React from 'react';
import { getPosts } from '../../selectors/postSelectors';
import { useSelector } from '../../state/BlogProvider';
import Post from './Post';

export default function PostList() {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post {...post} />
    </li>
  ));

  return (
    <ul>
      {postElements} 
    </ul>
  );
}
