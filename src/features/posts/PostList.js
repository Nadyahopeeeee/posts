import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import { selectAllPosts } from './postSlice'

const PostList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p className="post-content">{post.content.substring(0, 100)}</p>
      {post.date ? <TimeAgo timestamp={post.date} /> : ''}
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostList
