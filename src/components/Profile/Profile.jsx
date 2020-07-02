import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className= {c.content}>
        <img className = {c.img} src='https://www.iguides.ru/upload/medialibrary/00f/00fecceb15869ee06c2c53fdb8af87ae.jpg' />
        <MyPosts />
      </div>
    );
}

export default Profile;