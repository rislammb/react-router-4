import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({ match }) => {
  return (
    <div>
      <div>I am test {match.params.postId}</div>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default Test;
