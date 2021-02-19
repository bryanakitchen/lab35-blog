import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CommentContainer from '../../containers/CommentContainer';
import PostContainer from '../../containers/PostContainer';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"
            component={PostContainer} />

          <Route exact path="/posts/:postIndex"
            component={CommentContainer} />
        </Switch>
      </Router>
    </>
  );
}
