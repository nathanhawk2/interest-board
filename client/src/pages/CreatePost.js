import React from "react";

export default function createPost() {
  return (
<div style={{justifyContent:'center', display:'flex'}}>
  <h2>Create a Post</h2>
  <div>
    <form>
      <div>
        <input type="text" id="theme" placeholder="Theme"></input>
      </div>
      <div>
        <input type="text" placeholder="Compose your post here" id="post"></input>
      </div>
    </form>
  </div>
</div>
  );
}
