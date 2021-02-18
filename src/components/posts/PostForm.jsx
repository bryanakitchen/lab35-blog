import React, { useState } from 'react';
import { useDispatch } from '../../state/BlogProvider';
import { createPost } from '../../actions/postActions';

export default function PostForm() {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
  };

  return (
    <>
      <h3>Add a Blog Post</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        <textarea 
          placeholder="Body" 
          rows="10" 
          cols="50"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        ></textarea>
        <br />

        <button>Post</button>
      </form>
    </>
  );
}
