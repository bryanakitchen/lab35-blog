import React from 'react';
import PropTypes from 'prop-types';

export default function PostForm() {

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <input 
        type="text" 
        placeholder="Title" 
      />
      <br />
      <textarea 
        placeholder="Body" 
        rows="10" 
        cols="50"></textarea>
      <br />

      <button>Post</button>
    </form>
  );
}

PostForm.propTypes = {

};
