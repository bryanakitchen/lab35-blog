import React from 'react';

export default function PostList() {

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
