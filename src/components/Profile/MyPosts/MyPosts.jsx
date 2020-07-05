import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {



  let postsElements = props.posts.map(post => <Post message = {post.message} id = {post.id} likesCount = {post.likesCount}/>)

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