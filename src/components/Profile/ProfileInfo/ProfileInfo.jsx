import React from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div className={c.avaAndDescription}>
      <div className={c.ava}>
        <img src="https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png" />
        Name
        </div>
      <div className={c.description}><textarea maxLength='200' wrap="soft" placeholder = 'Ur description samurai'/></div>
    </div>
  );
}

export default ProfileInfo;