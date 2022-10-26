import React from "react";

export default function createPost() {
  return (   
<div style={{display:'flex', justifyContent:'center', margin:'5px'}} className='createPost' >
  <form style={{display: 'flex', boxSizing: 'border-box', justifyContent: 'center', flexDirection: 'column'}}>
    <h2 style={{display: 'flex', justifyContent: 'center',margin:'5px', fontSize: '30px'}} className="header">Create a Post</h2>
    <div style={{margin:'3px'}}>
      <input  style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px'}} type="text" id="theme" placeholder="Theme"></input>
    </div>
    <div style={{margin:'1px'}}>
      <input  style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px'}} type="text" placeholder="Compose your post here" id="post"></input>
    </div>
    <button className="postBtn " style={{cursor: 'pointer', justifyContent: 'center', backgroundColor: 'lightcoral', width: '400px', height: '40px', borderRadius: '9px', marginTop: '30px', fontWeight: 'bold'}}>Submit Post</button>
  </form>
  
</div>
  );
}
