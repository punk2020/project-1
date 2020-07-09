import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

  let NewPost = React.createRef();
  
  let addpost = () =>{
  let text = NewPost.current.value;
  props.addPost(text);
  }
  let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)

  return (
    <div>
      <div>My Posts</div>
      <div classname={c.addpost}>
        <textarea ref  = {NewPost}>Your post</textarea>
        <div></div>
        <button onClick={addpost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;