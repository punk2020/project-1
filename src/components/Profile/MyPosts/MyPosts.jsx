import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let posts = [
    {id: 1, message: 'Hello world' , likesCount: 11 },
    {id: 2, message: 'It`s my firs post' , likesCount: 0 }
  ]

  let postsElements = posts.map(post => <Post message = {post.message} id = {post.id} likesCount = {post.likesCount}/>)

  return (
    <div className={c.content}>
      <div>My Posts</div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;