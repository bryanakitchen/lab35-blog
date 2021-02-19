import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PostContainer from '../../containers/PostContainer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/"
            component={PostContainer} />

          <Route exact path="/posts/:title"
            component={Comment} />

        </Switch>
      </Router>
    </>
  );
}
// <PostForm />
// <PostList />
