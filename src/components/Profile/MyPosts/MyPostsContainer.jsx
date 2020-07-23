import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { updateNewMessagetTextActionCreator } from '../../../redux/dialogs-reducer';

function MyPostsContainer(props) {

let state = props.store.getState();


  let AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <div>
      <MyPosts
        updateNewPostText={onPostChange}
        addPost={AddPost}
        posts={state.profilePage.posts}
        NewPostText = {state.profilePage.NewPostText}
      />
    </div>
  );
}
export default MyPostsContainer;