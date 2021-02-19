import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import { getPosts } from '../../selectors/postSelectors';

export default function CommentForm({ postIndex }) {
  const dispatch = useDispatch();

  const posts = useSelector(getPosts);
  const selectedPost = posts.posts[postIndex];
  //   console.log('selectedPost', selectedPost);

  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createComment(postIndex, text));
    setText('');
  };

  return (
    <>
      <div>
        <h4>{selectedPost.title}</h4>
        <p>{selectedPost.body}</p>
      </div>

      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Comment"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

CommentForm.propTypes = {
  postIndex: PropTypes.string.isRequired 
};
