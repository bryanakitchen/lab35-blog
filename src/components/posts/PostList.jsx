import React from 'react';
import { getPosts } from '../../selectors/postSelectors';
import { useSelector } from 'react-redux';
import Post from './Post';

export default function PostList() {
  const posts = useSelector(getPosts);

  const postElements = posts.posts.map((post, i) => (
    <li key={post.title}>
      <Post {...post} index={i} />
    </li>
  ));

  return (
    <ul>
      {postElements} 
    </ul>
  );
}
