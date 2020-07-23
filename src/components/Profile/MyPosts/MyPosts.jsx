import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

  let NewPost = React.createRef();

  let onAddPost = () => {
   props.addPost();
  }
  let onPostChange = () => {
    let text = NewPost.current.value;
    props.updateNewPostText(text);
  }

  let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)

  return (
    <div>
      <div>My Posts</div>
      <div classname={c.addpost}>
        <textarea onChange={onPostChange} ref={ NewPost } value={props.newPostText} placeholder = 'wake the fuck up samurai' />
        <div></div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;