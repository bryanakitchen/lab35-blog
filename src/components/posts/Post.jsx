import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';

export default function Post({ title, body, index }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(index));
  };
  
  return (
    <div>
      <Link to={`/posts/${index}`} >
        <h4>{title}</h4>
        <p>{body}</p>
      </Link>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
