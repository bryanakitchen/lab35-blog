import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button>Delete</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};
