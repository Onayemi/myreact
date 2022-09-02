import React from 'react'
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Error
