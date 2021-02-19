import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PostForm from './PostForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('PostForm component', () => {
  afterEach(() => cleanup());
  it('renders PostForm', () => {
    const { asFragment } = render(
      <Provider store={store} >
        <PostForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
