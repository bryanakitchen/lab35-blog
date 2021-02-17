import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PostForm from './PostForm';
import { BlogProvider } from '../../state/BlogProvider';

describe('PostForm component', () => {
  afterEach(() => cleanup());
  it('renders PostForm', () => {
    const { asFragment } = render(
      <BlogProvider>
        <PostForm />
      </BlogProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
