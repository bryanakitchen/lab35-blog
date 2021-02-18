import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button>Delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
