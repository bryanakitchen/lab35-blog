import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function Comment({ comment, commentIndex, postIndex }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(postIndex, commentIndex));
  };
  
  return (
    <div>
      <h4>{comment}</h4>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired,
  postIndex: PropTypes.string.isRequired
};
