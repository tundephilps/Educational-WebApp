import React from 'react';
import AddPostForm from './Features/AddPostForm';
import PostsList from './Features/PostsList';
import "./Forum.css";

const Forum = () => {
  return (
    <main className='Formsection'>
        <AddPostForm />
<PostsList />
    </main>
  )
}

export default Forum