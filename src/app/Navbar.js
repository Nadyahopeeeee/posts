import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Posts project</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
