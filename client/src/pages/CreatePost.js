import React from "react";

export default function createPost() {
  return (   
<div style={{display:'flex', justifyContent:'center', margin:'5px'}} className='createPost' >
  <form>
    <h2 style={{margin:'5px'}} className="header">Create a Post</h2>
    <div style={{margin:'3px'}}>
      <input type="text" id="theme" placeholder="Theme"></input>
    </div>
    <div style={{margin:'3px', textAlign:'start'}}>
      <input type="text" placeholder="Compose your post here" id="post"></input>
    </div>
    <button className="postBtn" style={{justifyContent:'center'}}>Submit Post</button>
  </form>
  
</div>
  );
}
