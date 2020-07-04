import React from 'react';
import c from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={c.message}>{props.msg}</div>
    );
}

export default Message;