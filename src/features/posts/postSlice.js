import { createSlice, nanoid } from '@reduxjs/toolkit'
import sub from 'date-fns/sub'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'More text',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload)
    // },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },

    postUpdated(state, action) {
      const { id, title, content, userId } = action.payload
      const exitingPost = state.find((post) => post.id === id)
      if (exitingPost) {
        exitingPost.title = title
        exitingPost.content = content
        exitingPost.user = userId
      }
    },
  },
})

export const { postAdded, postUpdated } = postSlice.actions

export default postSlice.reducer
