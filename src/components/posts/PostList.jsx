import React from 'react';
import { getPosts } from '../../selectors/postSelectors';
import { useSelector } from 'react-redux';
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
