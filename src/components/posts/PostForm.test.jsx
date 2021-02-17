import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PostForm from './PostForm';

describe('PostForm component', () => {
  afterEach(() => cleanup());
  it('renders PostForm', () => {
    const { asFragment } = render(<PostForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
