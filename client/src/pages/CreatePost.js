import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutations";
import auth from "../utils/auth";

export default function CreatePost() {
  const [CreatePost] = useMutation(CREATE_POST);
  const [formData, setFormData] = useState({
    userId: auth.getProfile().data._id
  });

  const handleChange = event => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(auth.getProfile());
    console.log(formData);

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }} className='createPost' >
      <form onSubmit={handleSubmit} style={{ display: 'flex', boxSizing: 'border-box', justifyContent: 'center', flexDirection: 'column' }}>
        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '5px', fontSize: '30px' }} className="header">Create a Post</h2>
        <div style={{ margin: '3px' }}>
          <input
            name="theme"
            onChange={handleChange}
            style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px' }} type="text"
            id="theme"
            placeholder="Theme"
          ></input>
        </div>
        <div style={{ margin: '1px' }}>
          <input
              name="body"
              onChange={handleChange}
              style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px' }}
              type="text"
              placeholder="Compose your post here"
              id="post">
          </input>
        </div>
        <button className="postBtn " style={{ cursor: 'pointer', justifyContent: 'center', backgroundColor: '#6ABEA7', width: '400px', height: '40px', borderRadius: '9px', marginTop: '30px', fontWeight: 'bold', color: 'white' }}>Submit Post</button>
      </form>

    </div>
  );
}
