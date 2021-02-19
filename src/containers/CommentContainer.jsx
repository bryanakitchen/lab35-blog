import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../components/comments/CommentForm';
import CommentList from '../components/comments/CommentList';

function CommentContainer({ match }) {
  return (
    <>
      <CommentForm postIndex={match.params.postIndex} />
      <CommentList postIndex={match.params.postIndex} />
    </>
  );
}

export default CommentContainer;

CommentContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postIndex: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};