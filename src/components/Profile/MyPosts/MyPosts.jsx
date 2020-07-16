import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

  let NewPost = React.createRef();

  let AddPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }
  let onPostChange = () => {
    let text = NewPost.current.value;
    props.dispatch({
      type: 'UPDATE-NEW-POST-TEXT',
      NewText: text
    });
  }

  let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)

  return (
    <div>
      <div>My Posts</div>
      <div classname={c.addpost}>
        <textarea onChange={onPostChange} ref={NewPost} value={props.newPostText} />
        <div></div>
        <button onClick={AddPost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;