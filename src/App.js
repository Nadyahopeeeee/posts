import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostList from './features/posts/PostList'
import AddPostForm from './features/posts/AddPostForm'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'
import UsersList from './features/users/UsersList'
import UserPage from './features/users/UserPage'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )
}

export default App
