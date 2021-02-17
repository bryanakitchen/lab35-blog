import React, { createContext, useReducer } from 'react';

const BlogContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer();

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
