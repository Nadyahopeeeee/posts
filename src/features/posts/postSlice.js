import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post!', content: 'More text' },
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
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const exitingPost = state.find((post) => post.id === id)
      if (exitingPost) {
        exitingPost.title = title
        exitingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postSlice.actions

export default postSlice.reducer
