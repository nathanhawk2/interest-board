import React from 'react';

const createPost = () => {
  return (
    <div className='container'>
      <h2>Create a Post</h2>
      <div>
        <form>
          <div>
            <label>Theme</label>
            <input type='text' id='theme'></input>
          </div>
          <div>
            <label>Compose your post here</label>
            <input type='text'></input>
          </div>
        </form>
      </div>
    </div>
  );
};

module.exports = createPost;