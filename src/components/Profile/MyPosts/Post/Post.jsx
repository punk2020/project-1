import React from 'react';
import c from './Post.module.css';

function Post(props) {
  return (
    <div className={c.post}>
      <img className = {c.img}src="https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png"/>
      {props.message}
      <div>Likes: {props.likesCount}</div>
    </div>
  );
}

export default Post;