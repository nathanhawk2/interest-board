import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ _id, user }) => {
  return (
    <div key={_id}>
      <h4 style={{backgroundColor: 'white', textTransform: 'uppercase'}}>
        <Link to={`/users/${_id}`}>
          {user}
        </Link>
      </h4>
    </div>
  );
};

const UserList = ({ users, title }) => {
  if (!users.length) return <h3>No Users</h3>;

  const renderUsers = () => {
    if (!users) return null;
    return users.map(user => <User key={user._id} {...user} />);
  }

  return (
    <>
      <div className='container row' style={{ border: 'solid black 2px', margin: '8px', borderRadius: '5px', padding: '5px', backgroundColor: 'white' }}>
        <h3 style={{ textDecoration: 'underline', margin: '3px', backgroundColor: 'white' }}>{title}</h3>
        <div style={{ margin: '3px' , textTransform: 'uppercase'}}>
          {renderUsers()}
        </div>
      </div>
    </>
  );
};

export default UserList;
