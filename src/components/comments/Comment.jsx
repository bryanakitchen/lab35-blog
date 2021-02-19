import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function Comment({ text, commentIndex, postIndex }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(postIndex, commentIndex));
  };
  
  return (
    <div>
      <h4>{text}</h4>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired,
  postIndex: PropTypes.number.isRequired
};
