import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'
import useReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: useReducer,
    notifications: notificationsReducer,
  },
})
