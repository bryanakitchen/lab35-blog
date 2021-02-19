import React from 'react';
import { getComments } from '../../selectors/commentSelectors';
import { useSelector } from 'react-redux';
import Comment from './Comment';

export default function CommentList() {
  const comments = useSelector(getComments);
  // console.log('COMMENTS before map', comments);

  const commentElements = comments.comments.map(comment => (
    <li key={comment.text}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <ul>
      {commentElements} 
    </ul>
  );
}
