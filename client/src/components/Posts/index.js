import React from 'react';

const PostList = ({ post, theme }) => {
  if (!post.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h1>
        Lorem ipsum dolor amet.
      </h1>
      <p>Lorem ipsum dolor amet.</p>
    </div>
  );
};

export default PostList;
