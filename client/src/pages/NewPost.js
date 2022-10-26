import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';


const NewPost = () => {




    return (
        <main>
            <div>
                <form>
                    <h1>Create a Post</h1>
                    <input type="search">Pick a Theme</input>
                </form>

            </div>
            <div >
                {UserList()}
            </div>
        </main>
    );
};

export default NewPost;
