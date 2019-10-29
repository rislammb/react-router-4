import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <div>I am Home</div>
      <Link to='/posts/post-1'>Post One</Link>
      <Link to='/posts/post-2'>Post Two</Link>
      <Link to='/posts/post-3'>Post Three</Link>
    </div>
  );
};

export default Home;
