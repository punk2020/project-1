import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { updateNewMessagetTextActionCreator } from '../../../redux/dialogs-reducer';
import StoreContext from '../../../redux/StoreContext';

function MyPostsContainer() {

  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();


        let AddPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }


        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={AddPost}
          posts={state.profilePage.posts}
          NewPostText={state.profilePage.NewPostText}
        />
      }
    }</StoreContext.Consumer>
  );
}
export default MyPostsContainer;