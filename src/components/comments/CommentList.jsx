import React from 'react';
import PropTypes from 'prop-types';
import { getComments } from '../../selectors/commentSelectors';
import { useSelector } from 'react-redux';
import Comment from './Comment';

export default function CommentList({ postIndex }) {
  const comments = useSelector(getComments);
  console.log('COMMENTS before map', comments);

  const commentElements = comments[postIndex].map((comment, i) => (
    <li key={comment.text}>
      <Comment {...comment} commentIndex={i} postIndex={postIndex} />
    </li>
  ));

  return (
    <ul>
      {commentElements} 
    </ul>
  );
}

CommentList.propTypes = {
  postIndex: PropTypes.string.isRequired 
};
