import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <div className={c.content}>
      <img className={c.img} src='https://www.iguides.ru/upload/medialibrary/00f/00fecceb15869ee06c2c53fdb8af87ae.jpg' />
      <ProfileInfo />
      <MyPostsContainer
        store={props.store} />
    </div>
  );
}

export default Profile;