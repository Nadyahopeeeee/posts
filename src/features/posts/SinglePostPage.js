import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ReactionButtons from './ReactionButtons'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import { selectPostById } from './postSlice'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article>
        <h2 className="post">{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className="post-content">{post.content}</p>
        {post.date ? <TimeAgo timestamp={post.date} /> : ''}
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}

export default SinglePostPage
